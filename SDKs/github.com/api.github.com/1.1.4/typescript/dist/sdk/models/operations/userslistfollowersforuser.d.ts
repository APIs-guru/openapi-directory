import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListFollowersForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersListFollowersForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListFollowersForUserRequest extends SpeakeasyBase {
    pathParams: UsersListFollowersForUserPathParams;
    queryParams: UsersListFollowersForUserQueryParams;
}
export declare class UsersListFollowersForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
