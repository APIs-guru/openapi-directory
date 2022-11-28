import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersCheckFollowingForUserPathParams extends SpeakeasyBase {
    targetUser: string;
    username: string;
}
export declare class UsersCheckFollowingForUserRequest extends SpeakeasyBase {
    pathParams: UsersCheckFollowingForUserPathParams;
}
export declare class UsersCheckFollowingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
