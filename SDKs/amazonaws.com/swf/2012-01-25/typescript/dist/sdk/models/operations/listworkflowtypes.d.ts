import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkflowTypesQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum ListWorkflowTypesXAmzTargetEnum {
    SimpleWorkflowServiceListWorkflowTypes = "SimpleWorkflowService.ListWorkflowTypes"
}
export declare class ListWorkflowTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkflowTypesXAmzTargetEnum;
}
export declare class ListWorkflowTypesRequest extends SpeakeasyBase {
    queryParams: ListWorkflowTypesQueryParams;
    headers: ListWorkflowTypesHeaders;
    request: shared.ListWorkflowTypesInput;
}
export declare class ListWorkflowTypesResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
    workflowTypeInfos?: shared.WorkflowTypeInfos;
}
