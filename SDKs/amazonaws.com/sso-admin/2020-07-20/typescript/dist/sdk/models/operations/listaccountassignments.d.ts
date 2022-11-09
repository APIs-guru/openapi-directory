import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAccountAssignmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountAssignmentsXAmzTargetEnum {
    SwbExternalServiceListAccountAssignments = "SWBExternalService.ListAccountAssignments"
}
export declare class ListAccountAssignmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountAssignmentsXAmzTargetEnum;
}
export declare class ListAccountAssignmentsRequest extends SpeakeasyBase {
    queryParams: ListAccountAssignmentsQueryParams;
    headers: ListAccountAssignmentsHeaders;
    request: shared.ListAccountAssignmentsRequest;
}
export declare class ListAccountAssignmentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAccountAssignmentsResponse?: shared.ListAccountAssignmentsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
