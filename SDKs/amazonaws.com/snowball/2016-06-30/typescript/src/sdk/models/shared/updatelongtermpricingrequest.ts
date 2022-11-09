import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateLongTermPricingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsLongTermPricingAutoRenew" })
  isLongTermPricingAutoRenew?: boolean;

  @Metadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId: string;

  @Metadata({ data: "json, name=ReplacementJob" })
  replacementJob?: string;
}
