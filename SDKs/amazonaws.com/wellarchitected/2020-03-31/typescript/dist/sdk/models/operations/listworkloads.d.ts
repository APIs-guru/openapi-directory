import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkloadsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWorkloadsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorkloadsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    workloadNamePrefix?: string;
}
export declare class ListWorkloadsRequest extends SpeakeasyBase {
    queryParams: ListWorkloadsQueryParams;
    headers: ListWorkloadsHeaders;
    request: ListWorkloadsRequestBody;
}
export declare class ListWorkloadsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listWorkloadsOutput?: shared.ListWorkloadsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
