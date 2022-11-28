import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListInvitationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListInvitationsForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: ReposListInvitationsForAuthenticatedUserQueryParams;
}
export declare class ReposListInvitationsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    repositoryInvitations?: shared.RepositoryInvitation[];
}
