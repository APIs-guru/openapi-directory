import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItvEntitlement } from "./itventitlement";



export class ItvSubscriptionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective_entitlements", elemType: ItvEntitlement })
  effectiveEntitlements: ItvEntitlement[];

  @SpeakeasyMetadata({ data: "json, name=failed_availability_checks" })
  failedAvailabilityChecks: string[];

  @SpeakeasyMetadata({ data: "json, name=purchased" })
  purchased: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;
}
