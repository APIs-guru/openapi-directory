import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvUpdatePaymentStrongRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @Metadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
