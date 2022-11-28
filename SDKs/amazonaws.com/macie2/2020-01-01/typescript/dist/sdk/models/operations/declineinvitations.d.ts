import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeclineInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeclineInvitationsRequestBody extends SpeakeasyBase {
    accountIds: string[];
}
export declare class DeclineInvitationsRequest extends SpeakeasyBase {
    headers: DeclineInvitationsHeaders;
    request: DeclineInvitationsRequestBody;
}
export declare class DeclineInvitationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    declineInvitationsResponse?: shared.DeclineInvitationsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
