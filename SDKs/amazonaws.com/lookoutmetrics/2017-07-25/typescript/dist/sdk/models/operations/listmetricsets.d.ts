import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListMetricSetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListMetricSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMetricSetsRequestBody extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListMetricSetsRequest extends SpeakeasyBase {
    queryParams: ListMetricSetsQueryParams;
    headers: ListMetricSetsHeaders;
    request: ListMetricSetsRequestBody;
}
export declare class ListMetricSetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listMetricSetsResponse?: shared.ListMetricSetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
