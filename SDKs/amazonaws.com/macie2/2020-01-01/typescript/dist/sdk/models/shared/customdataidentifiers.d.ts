import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDetection } from "./customdetection";
/**
 * Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
**/
export declare class CustomDataIdentifiers extends SpeakeasyBase {
    detections?: CustomDetection[];
    totalCount?: number;
}
