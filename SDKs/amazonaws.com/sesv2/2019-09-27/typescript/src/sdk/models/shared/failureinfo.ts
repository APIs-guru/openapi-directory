import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailureInfo
/** 
 * An object that contains the failure details about an import job.
**/
export class FailureInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=FailedRecordsS3Url" })
  failedRecordsS3Url?: string;
}
