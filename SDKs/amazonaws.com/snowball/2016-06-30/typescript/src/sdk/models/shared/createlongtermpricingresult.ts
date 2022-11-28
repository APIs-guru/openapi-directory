import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLongTermPricingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId?: string;
}
