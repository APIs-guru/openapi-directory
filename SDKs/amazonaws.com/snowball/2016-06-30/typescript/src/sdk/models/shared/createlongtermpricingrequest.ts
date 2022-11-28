import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingTypeEnum } from "./longtermpricingtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";



export class CreateLongTermPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsLongTermPricingAutoRenew" })
  isLongTermPricingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingType" })
  longTermPricingType: LongTermPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;
}
