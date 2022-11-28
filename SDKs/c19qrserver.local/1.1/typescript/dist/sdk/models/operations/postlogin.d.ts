import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostLoginSampleSourceEnum {
    IOs = "iOS",
    Android = "android",
    Web = "web"
}
export declare class PostLoginSample extends SpeakeasyBase {
    email?: string;
    password?: string;
    source?: PostLoginSampleSourceEnum;
}
export declare class PostLoginRequest extends SpeakeasyBase {
    request: PostLoginSample;
}
export declare class PostLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    loginResponse?: shared.LoginResponse;
}
