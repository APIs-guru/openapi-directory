import { SpeakeasyBase } from "../../../internal/utils";
import { ItvEntitlement } from "./itventitlement";
export declare class ItvSubscriptionState extends SpeakeasyBase {
    effectiveEntitlements: ItvEntitlement[];
    failedAvailabilityChecks: string[];
    purchased: string[];
    source: string;
}
