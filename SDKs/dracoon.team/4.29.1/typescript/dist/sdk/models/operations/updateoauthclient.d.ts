import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOAuthClientPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class UpdateOAuthClientHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateOAuthClientRequest extends SpeakeasyBase {
    pathParams: UpdateOAuthClientPathParams;
    headers: UpdateOAuthClientHeaders;
    request: shared.UpdateOAuthClientRequest;
}
export declare class UpdateOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    updateOAuthClient400ApplicationJsonOneOf?: any;
}
