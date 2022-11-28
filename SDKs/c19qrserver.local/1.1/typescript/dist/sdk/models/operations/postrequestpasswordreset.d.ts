import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRequestPasswordResetSample extends SpeakeasyBase {
    email?: string;
}
export declare class PostRequestPasswordResetRequest extends SpeakeasyBase {
    request: PostRequestPasswordResetSample;
}
export declare class PostRequestPasswordResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    requestPasswordResetResponse?: shared.RequestPasswordResetResponse;
}
