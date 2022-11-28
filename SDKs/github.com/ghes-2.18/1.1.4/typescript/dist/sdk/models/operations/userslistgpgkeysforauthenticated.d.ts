import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListGpgKeysForAuthenticatedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListGpgKeysForAuthenticatedRequest extends SpeakeasyBase {
    queryParams: UsersListGpgKeysForAuthenticatedQueryParams;
}
export declare class UsersListGpgKeysForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gpgKeys?: shared.GpgKey[];
}
