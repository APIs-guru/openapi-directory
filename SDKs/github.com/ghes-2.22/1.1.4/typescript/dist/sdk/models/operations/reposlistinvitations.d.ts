import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListInvitationsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListInvitationsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListInvitationsRequest extends SpeakeasyBase {
    pathParams: ReposListInvitationsPathParams;
    queryParams: ReposListInvitationsQueryParams;
}
export declare class ReposListInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    repositoryInvitations?: shared.RepositoryInvitation[];
}
