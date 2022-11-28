import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExchangeRateHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetExchangeRateRequest extends SpeakeasyBase {
    headers: GetExchangeRateHeaders;
    request: shared.GetExchangeRateRequest;
}
export declare class GetExchangeRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getExchangeRate?: shared.GetExchangeRate;
}
