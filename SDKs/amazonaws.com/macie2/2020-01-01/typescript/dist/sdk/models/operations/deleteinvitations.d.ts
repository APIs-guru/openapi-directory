import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteInvitationsRequestBody extends SpeakeasyBase {
    accountIds: string[];
}
export declare class DeleteInvitationsRequest extends SpeakeasyBase {
    headers: DeleteInvitationsHeaders;
    request: DeleteInvitationsRequestBody;
}
export declare class DeleteInvitationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteInvitationsResponse?: shared.DeleteInvitationsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
