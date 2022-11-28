import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateInvitationPathParams extends SpeakeasyBase {
    invitationId: number;
    owner: string;
    repo: string;
}
export declare enum ReposUpdateInvitationRequestBodyPermissionsEnum {
    Read = "read",
    Write = "write",
    Maintain = "maintain",
    Triage = "triage",
    Admin = "admin"
}
export declare class ReposUpdateInvitationRequestBody extends SpeakeasyBase {
    permissions?: ReposUpdateInvitationRequestBodyPermissionsEnum;
}
export declare class ReposUpdateInvitationRequest extends SpeakeasyBase {
    pathParams: ReposUpdateInvitationPathParams;
    request?: ReposUpdateInvitationRequestBody;
}
export declare class ReposUpdateInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repositoryInvitation?: shared.RepositoryInvitation;
}
