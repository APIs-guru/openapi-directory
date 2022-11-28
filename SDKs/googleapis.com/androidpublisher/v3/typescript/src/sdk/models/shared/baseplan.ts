import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewingBasePlanType } from "./autorenewingbaseplantype";
import { OfferTag } from "./offertag";
import { OtherRegionsBasePlanConfig } from "./otherregionsbaseplanconfig";
import { PrepaidBasePlanType } from "./prepaidbaseplantype";
import { RegionalBasePlanConfig } from "./regionalbaseplanconfig";


export enum BasePlanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// BasePlanInput
/** 
 * A single base plan for a subscription.
**/
export class BasePlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenewingBasePlanType" })
  autoRenewingBasePlanType?: AutoRenewingBasePlanType;

  @SpeakeasyMetadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerTags", elemType: OfferTag })
  offerTags?: OfferTag[];

  @SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsBasePlanConfig;

  @SpeakeasyMetadata({ data: "json, name=prepaidBasePlanType" })
  prepaidBasePlanType?: PrepaidBasePlanType;

  @SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalBasePlanConfig })
  regionalConfigs?: RegionalBasePlanConfig[];
}


// BasePlan
/** 
 * A single base plan for a subscription.
**/
export class BasePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenewingBasePlanType" })
  autoRenewingBasePlanType?: AutoRenewingBasePlanType;

  @SpeakeasyMetadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerTags", elemType: OfferTag })
  offerTags?: OfferTag[];

  @SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" })
  otherRegionsConfig?: OtherRegionsBasePlanConfig;

  @SpeakeasyMetadata({ data: "json, name=prepaidBasePlanType" })
  prepaidBasePlanType?: PrepaidBasePlanType;

  @SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalBasePlanConfig })
  regionalConfigs?: RegionalBasePlanConfig[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BasePlanStateEnum;
}
