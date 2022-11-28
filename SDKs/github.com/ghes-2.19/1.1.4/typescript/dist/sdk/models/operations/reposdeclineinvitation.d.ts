import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeclineInvitationPathParams extends SpeakeasyBase {
    invitationId: number;
}
export declare class ReposDeclineInvitationRequest extends SpeakeasyBase {
    pathParams: ReposDeclineInvitationPathParams;
}
export declare class ReposDeclineInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
