import { SpeakeasyBase } from "../../../internal/utils";
import { ItvEntitlementCancelation } from "./itventitlementcancelation";
import { ItvEntitlement } from "./itventitlement";
export declare class ItvEntitlementsHistory extends SpeakeasyBase {
    cancellations: ItvEntitlementCancelation[];
    entitlements: ItvEntitlement[];
}
