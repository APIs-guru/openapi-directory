import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOAuthClientHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateOAuthClientRequest extends SpeakeasyBase {
    headers: CreateOAuthClientHeaders;
    request: shared.CreateOAuthClientRequest;
}
export declare class CreateOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    oAuthClient?: shared.OAuthClient;
    statusCode: number;
    createOAuthClient400ApplicationJsonOneOf?: any;
}
