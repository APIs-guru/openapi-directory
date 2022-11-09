import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAccountAssignmentDeletionStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountAssignmentDeletionStatusXAmzTargetEnum {
    SwbExternalServiceListAccountAssignmentDeletionStatus = "SWBExternalService.ListAccountAssignmentDeletionStatus"
}
export declare class ListAccountAssignmentDeletionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountAssignmentDeletionStatusXAmzTargetEnum;
}
export declare class ListAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
    queryParams: ListAccountAssignmentDeletionStatusQueryParams;
    headers: ListAccountAssignmentDeletionStatusHeaders;
    request: shared.ListAccountAssignmentDeletionStatusRequest;
}
export declare class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAccountAssignmentDeletionStatusResponse?: shared.ListAccountAssignmentDeletionStatusResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
