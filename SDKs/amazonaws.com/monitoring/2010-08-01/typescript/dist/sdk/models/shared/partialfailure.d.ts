import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.
**/
export declare class PartialFailure extends SpeakeasyBase {
    exceptionType?: string;
    failureCode?: string;
    failureDescription?: string;
    failureResource?: string;
}
