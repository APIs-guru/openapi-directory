import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyApiModel } from "./currencyapimodel";
export declare class PaymentGatewayDetailsApiModel extends SpeakeasyBase {
    name?: string;
    supportedCurrencies?: CurrencyApiModel[];
}
