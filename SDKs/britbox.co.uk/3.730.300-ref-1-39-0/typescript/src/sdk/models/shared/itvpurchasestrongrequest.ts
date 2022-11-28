import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvPurchaseStrongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;

  @SpeakeasyMetadata({ data: "json, name=voucher" })
  voucher?: string;
}
