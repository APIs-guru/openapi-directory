import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRdsDbInstancesXAmzTargetEnum {
    OpsWorks20130218DescribeRdsDbInstances = "OpsWorks_20130218.DescribeRdsDbInstances"
}
export declare class DescribeRdsDbInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRdsDbInstancesXAmzTargetEnum;
}
export declare class DescribeRdsDbInstancesRequest extends SpeakeasyBase {
    headers: DescribeRdsDbInstancesHeaders;
    request: shared.DescribeRdsDbInstancesRequest;
}
export declare class DescribeRdsDbInstancesResponse extends SpeakeasyBase {
    contentType: string;
    describeRdsDbInstancesResult?: shared.DescribeRdsDbInstancesResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
