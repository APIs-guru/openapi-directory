import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LongTermPricingTypeEnum } from "./longtermpricingtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";


export class CreateLongTermPricingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsLongTermPricingAutoRenew" })
  isLongTermPricingAutoRenew?: boolean;

  @Metadata({ data: "json, name=LongTermPricingType" })
  longTermPricingType: LongTermPricingTypeEnum;

  @Metadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;
}
