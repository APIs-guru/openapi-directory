import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAuthRefreshRequest extends SpeakeasyBase {
    request?: shared.RefreshTokenPayload;
}
export declare class PostAuthRefreshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessToken?: shared.AccessToken;
    badRequest?: shared.BadRequest;
}
