import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListPendingInvitationsLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListPendingInvitationsLegacyQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListPendingInvitationsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListPendingInvitationsLegacyPathParams;
    queryParams: TeamsListPendingInvitationsLegacyQueryParams;
}
export declare class TeamsListPendingInvitationsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    organizationInvitations?: shared.OrganizationInvitation[];
}
