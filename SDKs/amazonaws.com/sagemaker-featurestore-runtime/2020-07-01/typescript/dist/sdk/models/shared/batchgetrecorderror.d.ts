import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error that has occurred when attempting to retrieve a batch of Records.
**/
export declare class BatchGetRecordError extends SpeakeasyBase {
    errorCode: string;
    errorMessage: string;
    featureGroupName: string;
    recordIdentifierValueAsString: string;
}
