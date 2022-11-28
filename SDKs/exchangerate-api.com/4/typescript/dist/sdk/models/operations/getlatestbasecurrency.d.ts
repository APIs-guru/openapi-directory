import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLatestBaseCurrencyPathParams extends SpeakeasyBase {
    baseCurrency: string;
}
export declare class GetLatestBaseCurrency200ApplicationJson extends SpeakeasyBase {
    base?: string;
    date?: string;
    rates?: Map<string, number>;
    timeLastUpdated?: number;
}
export declare class GetLatestBaseCurrency404ApplicationJson extends SpeakeasyBase {
    errorType?: string;
    result?: string;
}
export declare class GetLatestBaseCurrencyRequest extends SpeakeasyBase {
    pathParams: GetLatestBaseCurrencyPathParams;
}
export declare class GetLatestBaseCurrencyResponse extends SpeakeasyBase {
    contentType: string;
    getLatestBaseCurrency200ApplicationJsonObject?: GetLatestBaseCurrency200ApplicationJson;
    getLatestBaseCurrency404ApplicationJsonObject?: GetLatestBaseCurrency404ApplicationJson;
    statusCode: number;
}
