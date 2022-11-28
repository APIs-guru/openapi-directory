import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOpenIdIdpConfigsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestOpenIdIdpConfigsRequest extends SpeakeasyBase {
    headers: RequestOpenIdIdpConfigsHeaders;
}
export declare class RequestOpenIdIdpConfigsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdIdpConfigs?: shared.OpenIdIdpConfig[];
    statusCode: number;
}
