import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersFollowPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersFollowRequest extends SpeakeasyBase {
    pathParams: UsersFollowPathParams;
}
export declare class UsersFollowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
