import { SpeakeasyBase } from "../../../internal/utils";
export declare class AcceptAdministratorInvitationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptAdministratorInvitationRequestBody extends SpeakeasyBase {
    administratorId: string;
    invitationId: string;
}
export declare class AcceptAdministratorInvitationRequest extends SpeakeasyBase {
    headers: AcceptAdministratorInvitationHeaders;
    request: AcceptAdministratorInvitationRequestBody;
}
export declare class AcceptAdministratorInvitationResponse extends SpeakeasyBase {
    acceptAdministratorInvitationResponse?: Map<string, any>;
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
