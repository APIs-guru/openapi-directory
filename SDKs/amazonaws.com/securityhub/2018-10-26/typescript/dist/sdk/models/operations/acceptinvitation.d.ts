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
    invitationId: string;
    masterId: string;
}
export declare class AcceptInvitationRequest extends SpeakeasyBase {
    headers: AcceptInvitationHeaders;
    request: AcceptInvitationRequestBody;
}
export declare class AcceptInvitationResponse extends SpeakeasyBase {
    acceptInvitationResponse?: Map<string, any>;
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
