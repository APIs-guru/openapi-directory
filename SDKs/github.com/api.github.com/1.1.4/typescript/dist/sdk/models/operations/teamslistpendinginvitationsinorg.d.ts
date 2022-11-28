import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListPendingInvitationsInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsListPendingInvitationsInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListPendingInvitationsInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListPendingInvitationsInOrgPathParams;
    queryParams: TeamsListPendingInvitationsInOrgQueryParams;
}
export declare class TeamsListPendingInvitationsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    organizationInvitations?: shared.OrganizationInvitation[];
}
