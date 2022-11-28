import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains the failure details about an import job.
**/
export declare class FailureInfo extends SpeakeasyBase {
    errorMessage?: string;
    failedRecordsS3Url?: string;
}
