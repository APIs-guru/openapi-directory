import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOpenIdIdpConfigPathParams extends SpeakeasyBase {
    idpId: number;
}
export declare class RemoveOpenIdIdpConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveOpenIdIdpConfigRequest extends SpeakeasyBase {
    pathParams: RemoveOpenIdIdpConfigPathParams;
    headers: RemoveOpenIdIdpConfigHeaders;
}
export declare class RemoveOpenIdIdpConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
