import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Automation failure.
**/
export declare class FailureDetails extends SpeakeasyBase {
    details?: Map<string, string[]>;
    failureStage?: string;
    failureType?: string;
}
