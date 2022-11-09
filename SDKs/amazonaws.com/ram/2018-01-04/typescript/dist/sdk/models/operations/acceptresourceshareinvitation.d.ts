import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AcceptResourceShareInvitationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptResourceShareInvitationRequestBody extends SpeakeasyBase {
    clientToken?: string;
    resourceShareInvitationArn: string;
}
export declare class AcceptResourceShareInvitationRequest extends SpeakeasyBase {
    headers: AcceptResourceShareInvitationHeaders;
    request: AcceptResourceShareInvitationRequestBody;
}
export declare class AcceptResourceShareInvitationResponse extends SpeakeasyBase {
    acceptResourceShareInvitationResponse?: shared.AcceptResourceShareInvitationResponse;
    contentType: string;
    idempotentParameterMismatchException?: any;
    invalidClientTokenException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    resourceShareInvitationAlreadyAcceptedException?: any;
    resourceShareInvitationAlreadyRejectedException?: any;
    resourceShareInvitationArnNotFoundException?: any;
    resourceShareInvitationExpiredException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
