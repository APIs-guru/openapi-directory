import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListPendingInvitationsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListPendingInvitationsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListPendingInvitationsRequest extends SpeakeasyBase {
    pathParams: OrgsListPendingInvitationsPathParams;
    queryParams: OrgsListPendingInvitationsQueryParams;
}
export declare class OrgsListPendingInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    organizationInvitations?: shared.OrganizationInvitation[];
}
