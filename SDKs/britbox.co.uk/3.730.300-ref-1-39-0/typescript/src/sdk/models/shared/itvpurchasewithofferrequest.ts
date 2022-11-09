import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvPurchaseWithOfferRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=couponId" })
  couponId: string;

  @Metadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @Metadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @Metadata({ data: "json, name=planId" })
  planId: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
