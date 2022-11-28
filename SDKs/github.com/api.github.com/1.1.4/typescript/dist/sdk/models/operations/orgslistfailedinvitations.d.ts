import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListFailedInvitationsPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListFailedInvitationsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListFailedInvitationsRequest extends SpeakeasyBase {
    pathParams: OrgsListFailedInvitationsPathParams;
    queryParams: OrgsListFailedInvitationsQueryParams;
}
export declare class OrgsListFailedInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    organizationInvitations?: shared.OrganizationInvitation[];
}
