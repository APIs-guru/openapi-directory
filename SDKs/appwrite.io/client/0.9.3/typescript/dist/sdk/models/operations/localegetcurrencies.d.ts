import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LocaleGetCurrenciesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class LocaleGetCurrenciesRequest extends SpeakeasyBase {
    security: LocaleGetCurrenciesSecurity;
}
export declare class LocaleGetCurrenciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    currencyList?: shared.CurrencyList;
}
