import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListFollowedByAuthenticatedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListFollowedByAuthenticatedRequest extends SpeakeasyBase {
    queryParams: UsersListFollowedByAuthenticatedQueryParams;
}
export declare class UsersListFollowedByAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
}
