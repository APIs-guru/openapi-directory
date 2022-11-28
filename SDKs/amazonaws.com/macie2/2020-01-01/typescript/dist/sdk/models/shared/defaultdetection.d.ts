import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";
/**
 * Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
**/
export declare class DefaultDetection extends SpeakeasyBase {
    count?: number;
    occurrences?: Occurrences;
    type?: string;
}
