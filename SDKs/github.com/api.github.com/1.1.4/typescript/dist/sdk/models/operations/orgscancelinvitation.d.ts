import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsCancelInvitationPathParams extends SpeakeasyBase {
    invitationId: number;
    org: string;
}
export declare class OrgsCancelInvitationRequest extends SpeakeasyBase {
    pathParams: OrgsCancelInvitationPathParams;
}
export declare class OrgsCancelInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
