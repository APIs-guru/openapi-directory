import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListFollowingForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersListFollowingForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListFollowingForUserRequest extends SpeakeasyBase {
    pathParams: UsersListFollowingForUserPathParams;
    queryParams: UsersListFollowingForUserQueryParams;
}
export declare class UsersListFollowingForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
