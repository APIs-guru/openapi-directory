import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersUnfollowPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersUnfollowRequest extends SpeakeasyBase {
    pathParams: UsersUnfollowPathParams;
}
export declare class UsersUnfollowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
