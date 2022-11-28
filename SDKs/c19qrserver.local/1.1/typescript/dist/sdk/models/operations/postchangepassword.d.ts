import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostChangePasswordSample extends SpeakeasyBase {
    oldPassword?: string;
    password?: string;
}
export declare class PostChangePasswordRequest extends SpeakeasyBase {
    request: PostChangePasswordSample;
}
export declare class PostChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
}
