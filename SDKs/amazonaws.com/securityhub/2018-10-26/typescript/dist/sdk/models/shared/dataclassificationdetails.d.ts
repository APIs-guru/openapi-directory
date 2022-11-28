import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationResult } from "./classificationresult";
/**
 * Provides details about sensitive data that was detected on a resource.
**/
export declare class DataClassificationDetails extends SpeakeasyBase {
    detailedResultsLocation?: string;
    result?: ClassificationResult;
}
