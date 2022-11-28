import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListFollowersForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListFollowersForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: UsersListFollowersForAuthenticatedUserQueryParams;
}
export declare class UsersListFollowersForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
}
