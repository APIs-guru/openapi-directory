import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
**/
export declare class TargetLocation extends SpeakeasyBase {
    accounts?: string[];
    executionRoleName?: string;
    regions?: string[];
    targetLocationMaxConcurrency?: string;
    targetLocationMaxErrors?: string;
}
