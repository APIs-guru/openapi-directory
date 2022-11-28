import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRouteCalculatorPathParams extends SpeakeasyBase {
    calculatorName: string;
}
export declare class DescribeRouteCalculatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRouteCalculatorRequest extends SpeakeasyBase {
    pathParams: DescribeRouteCalculatorPathParams;
    headers: DescribeRouteCalculatorHeaders;
}
export declare class DescribeRouteCalculatorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeRouteCalculatorResponse?: shared.DescribeRouteCalculatorResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
