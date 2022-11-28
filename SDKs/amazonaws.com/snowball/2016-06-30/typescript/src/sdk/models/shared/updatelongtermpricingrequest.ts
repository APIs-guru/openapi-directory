import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateLongTermPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsLongTermPricingAutoRenew" })
  isLongTermPricingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId: string;

  @SpeakeasyMetadata({ data: "json, name=ReplacementJob" })
  replacementJob?: string;
}
