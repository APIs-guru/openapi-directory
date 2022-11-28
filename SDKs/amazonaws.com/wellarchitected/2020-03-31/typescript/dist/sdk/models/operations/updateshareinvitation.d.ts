import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateShareInvitationPathParams extends SpeakeasyBase {
    shareInvitationId: string;
}
export declare class UpdateShareInvitationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateShareInvitationRequestBodyShareInvitationActionEnum {
    Accept = "ACCEPT",
    Reject = "REJECT"
}
export declare class UpdateShareInvitationRequestBody extends SpeakeasyBase {
    shareInvitationAction: UpdateShareInvitationRequestBodyShareInvitationActionEnum;
}
export declare class UpdateShareInvitationRequest extends SpeakeasyBase {
    pathParams: UpdateShareInvitationPathParams;
    headers: UpdateShareInvitationHeaders;
    request: UpdateShareInvitationRequestBody;
}
export declare class UpdateShareInvitationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateShareInvitationOutput?: shared.UpdateShareInvitationOutput;
    validationException?: any;
}
