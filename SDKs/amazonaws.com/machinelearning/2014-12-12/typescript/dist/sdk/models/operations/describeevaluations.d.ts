import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeEvaluationsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeEvaluationsXAmzTargetEnum {
    AmazonMl20141212DescribeEvaluations = "AmazonML_20141212.DescribeEvaluations"
}
export declare class DescribeEvaluationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEvaluationsXAmzTargetEnum;
}
export declare class DescribeEvaluationsRequest extends SpeakeasyBase {
    queryParams: DescribeEvaluationsQueryParams;
    headers: DescribeEvaluationsHeaders;
    request: shared.DescribeEvaluationsInput;
}
export declare class DescribeEvaluationsResponse extends SpeakeasyBase {
    contentType: string;
    describeEvaluationsOutput?: shared.DescribeEvaluationsOutput;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
