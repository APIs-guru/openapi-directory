import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItvEntitlement } from "./itventitlement";


export class ItvSubscriptionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective_entitlements", elemType: shared.ItvEntitlement })
  effectiveEntitlements: ItvEntitlement[];

  @Metadata({ data: "json, name=failed_availability_checks" })
  failedAvailabilityChecks: string[];

  @Metadata({ data: "json, name=purchased" })
  purchased: string[];

  @Metadata({ data: "json, name=source" })
  source: string;
}
