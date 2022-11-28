import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvPurchaseWithOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=couponId" })
  couponId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
