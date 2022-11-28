import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDeleteInvitationPathParams extends SpeakeasyBase {
    invitationId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteInvitationRequest extends SpeakeasyBase {
    pathParams: ReposDeleteInvitationPathParams;
}
export declare class ReposDeleteInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
