import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrencyApiModel } from "./currencyapimodel";


export class PaymentGatewayDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SupportedCurrencies", elemType: shared.CurrencyApiModel })
  supportedCurrencies?: CurrencyApiModel[];
}
