import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListPublicSshKeysForAuthenticatedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListPublicSshKeysForAuthenticatedRequest extends SpeakeasyBase {
    queryParams: UsersListPublicSshKeysForAuthenticatedQueryParams;
}
export declare class UsersListPublicSshKeysForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    keys?: shared.Key[];
}
