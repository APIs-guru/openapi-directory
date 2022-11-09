import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeProvisioningParametersXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisioningParameters = "AWS242ServiceCatalogService.DescribeProvisioningParameters"
}
export declare class DescribeProvisioningParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisioningParametersXAmzTargetEnum;
}
export declare class DescribeProvisioningParametersRequest extends SpeakeasyBase {
    headers: DescribeProvisioningParametersHeaders;
    request: shared.DescribeProvisioningParametersInput;
}
export declare class DescribeProvisioningParametersResponse extends SpeakeasyBase {
    contentType: string;
    describeProvisioningParametersOutput?: shared.DescribeProvisioningParametersOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
