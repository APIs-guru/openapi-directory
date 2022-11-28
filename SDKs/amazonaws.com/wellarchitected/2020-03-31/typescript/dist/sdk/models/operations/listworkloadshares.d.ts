import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkloadSharesPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class ListWorkloadSharesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sharedWithPrefix?: string;
}
export declare class ListWorkloadSharesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorkloadSharesRequest extends SpeakeasyBase {
    pathParams: ListWorkloadSharesPathParams;
    queryParams: ListWorkloadSharesQueryParams;
    headers: ListWorkloadSharesHeaders;
}
export declare class ListWorkloadSharesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listWorkloadSharesOutput?: shared.ListWorkloadSharesOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
