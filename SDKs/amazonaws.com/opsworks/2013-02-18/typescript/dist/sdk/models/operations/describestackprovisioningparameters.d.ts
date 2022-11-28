import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStackProvisioningParametersXAmzTargetEnum {
    OpsWorks20130218DescribeStackProvisioningParameters = "OpsWorks_20130218.DescribeStackProvisioningParameters"
}
export declare class DescribeStackProvisioningParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStackProvisioningParametersXAmzTargetEnum;
}
export declare class DescribeStackProvisioningParametersRequest extends SpeakeasyBase {
    headers: DescribeStackProvisioningParametersHeaders;
    request: shared.DescribeStackProvisioningParametersRequest;
}
export declare class DescribeStackProvisioningParametersResponse extends SpeakeasyBase {
    contentType: string;
    describeStackProvisioningParametersResult?: shared.DescribeStackProvisioningParametersResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
