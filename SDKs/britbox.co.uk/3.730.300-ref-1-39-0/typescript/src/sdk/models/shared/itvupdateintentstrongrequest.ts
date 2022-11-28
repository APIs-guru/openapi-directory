import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvUpdateIntentStrongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentMethodFromToken" })
  paymentMethodFromToken?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
