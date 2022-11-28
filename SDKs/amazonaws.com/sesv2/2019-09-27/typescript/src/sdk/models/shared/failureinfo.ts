import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailureInfo
/** 
 * An object that contains the failure details about an import job.
**/
export class FailureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=FailedRecordsS3Url" })
  failedRecordsS3Url?: string;
}
