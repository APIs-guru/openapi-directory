import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMetricSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMetricSetRequestBody extends SpeakeasyBase {
    metricSetArn: string;
}
export declare class DescribeMetricSetRequest extends SpeakeasyBase {
    headers: DescribeMetricSetHeaders;
    request: DescribeMetricSetRequestBody;
}
export declare class DescribeMetricSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeMetricSetResponse?: shared.DescribeMetricSetResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
