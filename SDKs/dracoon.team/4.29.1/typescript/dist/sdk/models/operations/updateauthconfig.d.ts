import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAuthConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateAuthConfigRequest extends SpeakeasyBase {
    headers: UpdateAuthConfigHeaders;
    request: shared.AuthConfig;
}
export declare class UpdateAuthConfigResponse extends SpeakeasyBase {
    authConfig?: shared.AuthConfig;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
