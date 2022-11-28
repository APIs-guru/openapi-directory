import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserSample extends SpeakeasyBase {
    admin?: boolean;
    email?: string;
    name?: string;
    readOnly?: boolean;
}
export declare class PostUserRequest extends SpeakeasyBase {
    request: PostUserSample;
}
export declare class PostUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createUserResponse?: shared.CreateUserResponse;
    invalidToken?: shared.InvalidToken;
}
