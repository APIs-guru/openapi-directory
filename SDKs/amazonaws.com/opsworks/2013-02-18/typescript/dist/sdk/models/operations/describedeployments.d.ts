import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDeploymentsXAmzTargetEnum {
    OpsWorks20130218DescribeDeployments = "OpsWorks_20130218.DescribeDeployments"
}
export declare class DescribeDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeploymentsXAmzTargetEnum;
}
export declare class DescribeDeploymentsRequest extends SpeakeasyBase {
    headers: DescribeDeploymentsHeaders;
    request: shared.DescribeDeploymentsRequest;
}
export declare class DescribeDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    describeDeploymentsResult?: shared.DescribeDeploymentsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
