import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAuthApiKeyRequest extends SpeakeasyBase {
    request?: shared.AuthenticatePayload;
}
export declare class PostAuthApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessToken?: shared.AccessToken;
    badRequest?: shared.BadRequest;
}
