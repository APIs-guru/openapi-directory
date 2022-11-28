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
    contentType: string;
    deleteInvitationsResponse?: shared.DeleteInvitationsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
