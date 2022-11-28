import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItvEntitlementCancelation } from "./itventitlementcancelation";
import { ItvEntitlement } from "./itventitlement";



export class ItvEntitlementsHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellations", elemType: ItvEntitlementCancelation })
  cancellations: ItvEntitlementCancelation[];

  @SpeakeasyMetadata({ data: "json, name=entitlements", elemType: ItvEntitlement })
  entitlements: ItvEntitlement[];
}
