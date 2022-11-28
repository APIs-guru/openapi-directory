import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOpenIdIdpConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateOpenIdIdpConfigRequest extends SpeakeasyBase {
    headers: CreateOpenIdIdpConfigHeaders;
    request: shared.CreateOpenIdIdpConfigRequest;
}
export declare class CreateOpenIdIdpConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdIdpConfig?: shared.OpenIdIdpConfig;
    statusCode: number;
}
