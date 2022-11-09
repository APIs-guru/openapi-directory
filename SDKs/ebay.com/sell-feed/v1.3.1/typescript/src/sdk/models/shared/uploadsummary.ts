import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadSummary
/** 
 * This container provides summary information on an upload feed (not applicable for download feed types).
**/
export class UploadSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @Metadata({ data: "json, name=successCount" })
  successCount?: number;
}
