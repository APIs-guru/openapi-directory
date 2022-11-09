import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvUpdateIntentStrongRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @Metadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
