import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InviteMemberPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class InviteMemberRequests extends SpeakeasyBase {
    inviteMembersRequest?: shared.InviteMembersRequest;
    inviteMembersRequest1?: shared.InviteMembersRequest;
    inviteMembersRequest2?: shared.InviteMembersRequest;
}
export declare class InviteMemberRequest extends SpeakeasyBase {
    pathParams: InviteMemberPathParams;
    request: InviteMemberRequests;
}
export declare class InviteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
