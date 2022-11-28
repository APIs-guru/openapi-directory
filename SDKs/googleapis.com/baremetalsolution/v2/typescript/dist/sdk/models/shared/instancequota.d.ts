import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource budget.
**/
export declare class InstanceQuota extends SpeakeasyBase {
    availableMachineCount?: number;
    gcpService?: string;
    instanceType?: string;
    location?: string;
    name?: string;
}
