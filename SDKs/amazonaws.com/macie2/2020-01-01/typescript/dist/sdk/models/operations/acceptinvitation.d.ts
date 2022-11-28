import { SpeakeasyBase } from "../../../internal/utils";
export declare class AcceptInvitationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptInvitationRequestBody extends SpeakeasyBase {
    administratorAccountId?: string;
    invitationId: string;
    masterAccount?: string;
}
export declare class AcceptInvitationRequest extends SpeakeasyBase {
    headers: AcceptInvitationHeaders;
    request: AcceptInvitationRequestBody;
}
export declare class AcceptInvitationResponse extends SpeakeasyBase {
    acceptInvitationResponse?: Map<string, any>;
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
