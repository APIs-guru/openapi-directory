import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Channel } from "./channel";
import { BatchError } from "./batcherror";


export class BatchGetChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.Channel })
  channels?: Channel[];

  @Metadata({ data: "json, name=errors", elemType: shared.BatchError })
  errors?: BatchError[];
}
