import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeneralApiCurrenciesHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiCurrenciesRequest extends SpeakeasyBase {
    headers: GeneralApiCurrenciesHeaders;
}
export declare class GeneralApiCurrenciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    currencyDetailsApiModels?: shared.CurrencyDetailsApiModel[];
    statusCode: number;
}
