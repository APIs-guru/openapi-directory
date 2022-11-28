import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposAcceptInvitationPathParams extends SpeakeasyBase {
    invitationId: number;
}
export declare class ReposAcceptInvitationRequest extends SpeakeasyBase {
    pathParams: ReposAcceptInvitationPathParams;
}
export declare class ReposAcceptInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
