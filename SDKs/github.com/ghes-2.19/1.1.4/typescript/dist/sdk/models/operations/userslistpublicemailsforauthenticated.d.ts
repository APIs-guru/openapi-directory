import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListPublicEmailsForAuthenticatedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListPublicEmailsForAuthenticatedRequest extends SpeakeasyBase {
    queryParams: UsersListPublicEmailsForAuthenticatedQueryParams;
}
export declare class UsersListPublicEmailsForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    emails?: shared.Email[];
}
