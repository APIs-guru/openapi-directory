import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeInstancesXAmzTargetEnum {
    OpsWorks20130218DescribeInstances = "OpsWorks_20130218.DescribeInstances"
}
export declare class DescribeInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstancesXAmzTargetEnum;
}
export declare class DescribeInstancesRequest extends SpeakeasyBase {
    headers: DescribeInstancesHeaders;
    request: shared.DescribeInstancesRequest;
}
export declare class DescribeInstancesResponse extends SpeakeasyBase {
    contentType: string;
    describeInstancesResult?: shared.DescribeInstancesResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
