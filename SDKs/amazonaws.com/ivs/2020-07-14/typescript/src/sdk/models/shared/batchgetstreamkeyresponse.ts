import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchError } from "./batcherror";
import { StreamKey } from "./streamkey";



export class BatchGetStreamKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchError })
  errors?: BatchError[];

  @SpeakeasyMetadata({ data: "json, name=streamKeys", elemType: StreamKey })
  streamKeys?: StreamKey[];
}
