import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkflowsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkflowsXAmzTargetEnum {
    TransferServiceListWorkflows = "TransferService.ListWorkflows"
}
export declare class ListWorkflowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkflowsXAmzTargetEnum;
}
export declare class ListWorkflowsRequest extends SpeakeasyBase {
    queryParams: ListWorkflowsQueryParams;
    headers: ListWorkflowsHeaders;
    request: shared.ListWorkflowsRequest;
}
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidRequestException?: any;
    listWorkflowsResponse?: shared.ListWorkflowsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
}
