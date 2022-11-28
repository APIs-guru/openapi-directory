import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PurchaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId?: string;
}
