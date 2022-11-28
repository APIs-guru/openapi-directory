import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAnomalyDetectionExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeAnomalyDetectionExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAnomalyDetectionExecutionsRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    maxResults?: number;
    nextToken?: string;
    timestamp?: string;
}
export declare class DescribeAnomalyDetectionExecutionsRequest extends SpeakeasyBase {
    queryParams: DescribeAnomalyDetectionExecutionsQueryParams;
    headers: DescribeAnomalyDetectionExecutionsHeaders;
    request: DescribeAnomalyDetectionExecutionsRequestBody;
}
export declare class DescribeAnomalyDetectionExecutionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAnomalyDetectionExecutionsResponse?: shared.DescribeAnomalyDetectionExecutionsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
