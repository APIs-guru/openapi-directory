import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyApiModel } from "./currencyapimodel";



export class PaymentGatewayDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedCurrencies", elemType: CurrencyApiModel })
  supportedCurrencies?: CurrencyApiModel[];
}
