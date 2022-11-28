import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationResult } from "./classificationresult";
/**
 * Provides information about a sensitive data finding, including the classification job that produced the finding.
**/
export declare class ClassificationDetails extends SpeakeasyBase {
    detailedResultsLocation?: string;
    jobArn?: string;
    jobId?: string;
    result?: ClassificationResult;
}
