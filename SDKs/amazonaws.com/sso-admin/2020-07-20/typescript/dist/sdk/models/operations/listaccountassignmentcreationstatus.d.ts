import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccountAssignmentCreationStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountAssignmentCreationStatusXAmzTargetEnum {
    SwbExternalServiceListAccountAssignmentCreationStatus = "SWBExternalService.ListAccountAssignmentCreationStatus"
}
export declare class ListAccountAssignmentCreationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountAssignmentCreationStatusXAmzTargetEnum;
}
export declare class ListAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
    queryParams: ListAccountAssignmentCreationStatusQueryParams;
    headers: ListAccountAssignmentCreationStatusHeaders;
    request: shared.ListAccountAssignmentCreationStatusRequest;
}
export declare class ListAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAccountAssignmentCreationStatusResponse?: shared.ListAccountAssignmentCreationStatusResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
