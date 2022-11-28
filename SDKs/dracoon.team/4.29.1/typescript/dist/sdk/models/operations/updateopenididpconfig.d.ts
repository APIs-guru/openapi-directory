import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOpenIdIdpConfigPathParams extends SpeakeasyBase {
    idpId: number;
}
export declare class UpdateOpenIdIdpConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateOpenIdIdpConfigRequest extends SpeakeasyBase {
    pathParams: UpdateOpenIdIdpConfigPathParams;
    headers: UpdateOpenIdIdpConfigHeaders;
    request: shared.UpdateOpenIdIdpConfigRequest;
}
export declare class UpdateOpenIdIdpConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdIdpConfig?: shared.OpenIdIdpConfig;
    statusCode: number;
}
