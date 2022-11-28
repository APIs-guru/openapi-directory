import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NegotiatedPricePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestOfferAutoAcceptEnabled" })
  bestOfferAutoAcceptEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bestOfferAutoDeclineEnabled" })
  bestOfferAutoDeclineEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bestOfferCounterEnabled" })
  bestOfferCounterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;
}
