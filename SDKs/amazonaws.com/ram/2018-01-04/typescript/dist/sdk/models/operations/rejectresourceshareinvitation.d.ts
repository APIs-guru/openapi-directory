import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RejectResourceShareInvitationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RejectResourceShareInvitationRequestBody extends SpeakeasyBase {
    clientToken?: string;
    resourceShareInvitationArn: string;
}
export declare class RejectResourceShareInvitationRequest extends SpeakeasyBase {
    headers: RejectResourceShareInvitationHeaders;
    request: RejectResourceShareInvitationRequestBody;
}
export declare class RejectResourceShareInvitationResponse extends SpeakeasyBase {
    contentType: string;
    idempotentParameterMismatchException?: any;
    invalidClientTokenException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    rejectResourceShareInvitationResponse?: shared.RejectResourceShareInvitationResponse;
    resourceShareInvitationAlreadyAcceptedException?: any;
    resourceShareInvitationAlreadyRejectedException?: any;
    resourceShareInvitationArnNotFoundException?: any;
    resourceShareInvitationExpiredException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
