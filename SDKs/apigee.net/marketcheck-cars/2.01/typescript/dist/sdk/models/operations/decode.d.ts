import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DecodePathParams extends SpeakeasyBase {
    vin: string;
}
export declare class DecodeQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class DecodeRequest extends SpeakeasyBase {
    pathParams: DecodePathParams;
    queryParams: DecodeQueryParams;
}
export declare class DecodeResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
