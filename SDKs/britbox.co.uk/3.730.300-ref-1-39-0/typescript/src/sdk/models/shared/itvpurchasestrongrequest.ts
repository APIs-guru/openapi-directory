import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvPurchaseStrongRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @Metadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @Metadata({ data: "json, name=planId" })
  planId: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;

  @Metadata({ data: "json, name=voucher" })
  voucher?: string;
}
