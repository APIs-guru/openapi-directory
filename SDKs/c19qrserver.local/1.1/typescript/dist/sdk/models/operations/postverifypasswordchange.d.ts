import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVerifyPasswordChangeSample extends SpeakeasyBase {
    guid?: string;
    password?: string;
}
export declare class PostVerifyPasswordChangeRequest extends SpeakeasyBase {
    request: PostVerifyPasswordChangeSample;
}
export declare class PostVerifyPasswordChangeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
}
