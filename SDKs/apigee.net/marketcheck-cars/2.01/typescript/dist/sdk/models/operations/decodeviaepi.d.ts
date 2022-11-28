import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DecodeViaEpiPathParams extends SpeakeasyBase {
    vin: string;
}
export declare class DecodeViaEpiQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class DecodeViaEpiRequest extends SpeakeasyBase {
    pathParams: DecodeViaEpiPathParams;
    queryParams: DecodeViaEpiQueryParams;
}
export declare class DecodeViaEpiResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
