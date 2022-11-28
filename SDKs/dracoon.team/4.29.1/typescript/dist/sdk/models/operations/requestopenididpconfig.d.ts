import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOpenIdIdpConfigPathParams extends SpeakeasyBase {
    idpId: number;
}
export declare class RequestOpenIdIdpConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestOpenIdIdpConfigRequest extends SpeakeasyBase {
    pathParams: RequestOpenIdIdpConfigPathParams;
    headers: RequestOpenIdIdpConfigHeaders;
}
export declare class RequestOpenIdIdpConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdIdpConfig?: shared.OpenIdIdpConfig;
    statusCode: number;
}
