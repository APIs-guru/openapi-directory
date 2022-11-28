import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListPublicKeysForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersListPublicKeysForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListPublicKeysForUserRequest extends SpeakeasyBase {
    pathParams: UsersListPublicKeysForUserPathParams;
    queryParams: UsersListPublicKeysForUserQueryParams;
}
export declare class UsersListPublicKeysForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    keySimples?: shared.KeySimple[];
}
