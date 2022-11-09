import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NegotiatedPricePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestOfferAutoAcceptEnabled" })
  bestOfferAutoAcceptEnabled?: boolean;

  @Metadata({ data: "json, name=bestOfferAutoDeclineEnabled" })
  bestOfferAutoDeclineEnabled?: boolean;

  @Metadata({ data: "json, name=bestOfferCounterEnabled" })
  bestOfferCounterEnabled?: boolean;

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;
}
