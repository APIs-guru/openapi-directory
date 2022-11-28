import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadStatus } from "./uploadstatus";



export class UploadStatuses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: UploadStatus })
  results: UploadStatus[];
}
