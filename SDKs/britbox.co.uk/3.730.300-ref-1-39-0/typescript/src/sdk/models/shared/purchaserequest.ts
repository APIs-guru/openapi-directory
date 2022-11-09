import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PurchaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @Metadata({ data: "json, name=planId" })
  planId?: string;
}
