import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisioningArtifact = "AWS242ServiceCatalogService.DescribeProvisioningArtifact"
}
export declare class DescribeProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisioningArtifactXAmzTargetEnum;
}
export declare class DescribeProvisioningArtifactRequest extends SpeakeasyBase {
    headers: DescribeProvisioningArtifactHeaders;
    request: shared.DescribeProvisioningArtifactInput;
}
export declare class DescribeProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    describeProvisioningArtifactOutput?: shared.DescribeProvisioningArtifactOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
