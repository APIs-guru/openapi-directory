import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListEmailsForAuthenticatedQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class UsersListEmailsForAuthenticatedRequest extends SpeakeasyBase {
    queryParams: UsersListEmailsForAuthenticatedQueryParams;
}
export declare class UsersListEmailsForAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    emails?: shared.Email[];
}
