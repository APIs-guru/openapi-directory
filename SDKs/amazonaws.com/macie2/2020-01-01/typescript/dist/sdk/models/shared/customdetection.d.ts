import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";
/**
 * Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
**/
export declare class CustomDetection extends SpeakeasyBase {
    arn?: string;
    count?: number;
    name?: string;
    occurrences?: Occurrences;
}
