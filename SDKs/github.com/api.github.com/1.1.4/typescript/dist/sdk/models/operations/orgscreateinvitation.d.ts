import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsCreateInvitationPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum OrgsCreateInvitationRequestBodyRoleEnum {
    Admin = "admin",
    DirectMember = "direct_member",
    BillingManager = "billing_manager"
}
export declare class OrgsCreateInvitationRequestBody extends SpeakeasyBase {
    email?: string;
    inviteeId?: number;
    role?: OrgsCreateInvitationRequestBodyRoleEnum;
    teamIds?: number[];
}
export declare class OrgsCreateInvitationRequest extends SpeakeasyBase {
    pathParams: OrgsCreateInvitationPathParams;
    request?: OrgsCreateInvitationRequestBody;
}
export declare class OrgsCreateInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    organizationInvitation?: shared.OrganizationInvitation;
    validationError?: shared.ValidationError;
}
