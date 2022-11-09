import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoRenewingBasePlanType } from "./autorenewingbaseplantype";
import { OfferTag } from "./offertag";
import { OtherRegionsBasePlanConfig } from "./otherregionsbaseplanconfig";
import { PrepaidBasePlanType } from "./prepaidbaseplantype";
import { RegionalBasePlanConfig } from "./regionalbaseplanconfig";

export enum BasePlanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// BasePlan
/** 
 * A single base plan for a subscription.
**/
export class BasePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRenewingBasePlanType" })
  autoRenewingBasePlanType?: AutoRenewingBasePlanType;

  @Metadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @Metadata({ data: "json, name=offerTags", elemType: shared.OfferTag })
  offerTags?: OfferTag[];

  @Metadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsBasePlanConfig;

  @Metadata({ data: "json, name=prepaidBasePlanType" })
  prepaidBasePlanType?: PrepaidBasePlanType;

  @Metadata({ data: "json, name=regionalConfigs", elemType: shared.RegionalBasePlanConfig })
  regionalConfigs?: RegionalBasePlanConfig[];

  @Metadata({ data: "json, name=state" })
  state?: BasePlanStateEnum;
}
