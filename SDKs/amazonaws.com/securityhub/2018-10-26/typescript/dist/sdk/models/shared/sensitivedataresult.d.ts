import { SpeakeasyBase } from "../../../internal/utils";
import { SensitiveDataDetections } from "./sensitivedatadetections";
/**
 * Contains a detected instance of sensitive data that are based on built-in identifiers.
**/
export declare class SensitiveDataResult extends SpeakeasyBase {
    category?: string;
    detections?: SensitiveDataDetections[];
    totalCount?: number;
}
