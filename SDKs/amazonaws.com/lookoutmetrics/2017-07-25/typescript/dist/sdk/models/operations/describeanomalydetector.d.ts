import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAnomalyDetectorRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
}
export declare class DescribeAnomalyDetectorRequest extends SpeakeasyBase {
    headers: DescribeAnomalyDetectorHeaders;
    request: DescribeAnomalyDetectorRequestBody;
}
export declare class DescribeAnomalyDetectorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAnomalyDetectorResponse?: shared.DescribeAnomalyDetectorResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
