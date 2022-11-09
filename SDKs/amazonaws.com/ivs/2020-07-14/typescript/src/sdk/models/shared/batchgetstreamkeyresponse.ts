import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchError } from "./batcherror";
import { StreamKey } from "./streamkey";


export class BatchGetStreamKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.BatchError })
  errors?: BatchError[];

  @Metadata({ data: "json, name=streamKeys", elemType: shared.StreamKey })
  streamKeys?: StreamKey[];
}
