import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadSummary
/** 
 * This container provides summary information on an upload feed (not applicable for download feed types).
**/
export class UploadSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=successCount" })
  successCount?: number;
}
