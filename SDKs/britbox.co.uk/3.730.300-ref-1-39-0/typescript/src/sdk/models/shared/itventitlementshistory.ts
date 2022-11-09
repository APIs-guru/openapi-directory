import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItvEntitlementCancelation } from "./itventitlementcancelation";
import { ItvEntitlement } from "./itventitlement";


export class ItvEntitlementsHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellations", elemType: shared.ItvEntitlementCancelation })
  cancellations: ItvEntitlementCancelation[];

  @Metadata({ data: "json, name=entitlements", elemType: shared.ItvEntitlement })
  entitlements: ItvEntitlement[];
}
