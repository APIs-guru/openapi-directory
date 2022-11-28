import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { BatchError } from "./batcherror";



export class BatchGetChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: Channel })
  channels?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchError })
  errors?: BatchError[];
}
