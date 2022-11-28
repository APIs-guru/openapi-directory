import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAuthConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestAuthConfigRequest extends SpeakeasyBase {
    headers: RequestAuthConfigHeaders;
}
export declare class RequestAuthConfigResponse extends SpeakeasyBase {
    authConfig?: shared.AuthConfig;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
