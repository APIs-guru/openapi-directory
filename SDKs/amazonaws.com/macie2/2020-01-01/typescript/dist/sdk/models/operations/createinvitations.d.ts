import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvitationsRequestBody extends SpeakeasyBase {
    accountIds: string[];
    disableEmailNotification?: boolean;
    message?: string;
}
export declare class CreateInvitationsRequest extends SpeakeasyBase {
    headers: CreateInvitationsHeaders;
    request: CreateInvitationsRequestBody;
}
export declare class CreateInvitationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createInvitationsResponse?: shared.CreateInvitationsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
