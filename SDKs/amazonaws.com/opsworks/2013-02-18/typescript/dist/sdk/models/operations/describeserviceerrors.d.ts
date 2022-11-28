import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeServiceErrorsXAmzTargetEnum {
    OpsWorks20130218DescribeServiceErrors = "OpsWorks_20130218.DescribeServiceErrors"
}
export declare class DescribeServiceErrorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceErrorsXAmzTargetEnum;
}
export declare class DescribeServiceErrorsRequest extends SpeakeasyBase {
    headers: DescribeServiceErrorsHeaders;
    request: shared.DescribeServiceErrorsRequest;
}
export declare class DescribeServiceErrorsResponse extends SpeakeasyBase {
    contentType: string;
    describeServiceErrorsResult?: shared.DescribeServiceErrorsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
