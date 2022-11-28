import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListGpgKeysForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersListGpgKeysForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListGpgKeysForUserRequest extends SpeakeasyBase {
    pathParams: UsersListGpgKeysForUserPathParams;
    queryParams: UsersListGpgKeysForUserQueryParams;
}
export declare class UsersListGpgKeysForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    gpgKeys?: shared.GpgKey[];
}
