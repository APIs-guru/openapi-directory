import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UploadStatus } from "./uploadstatus";


export class UploadStatuses extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.UploadStatus })
  results: UploadStatus[];
}
