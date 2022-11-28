import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProvisioningArtifact = "AWS242ServiceCatalogService.CreateProvisioningArtifact"
}
export declare class CreateProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProvisioningArtifactXAmzTargetEnum;
}
export declare class CreateProvisioningArtifactRequest extends SpeakeasyBase {
    headers: CreateProvisioningArtifactHeaders;
    request: shared.CreateProvisioningArtifactInput;
}
export declare class CreateProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    createProvisioningArtifactOutput?: shared.CreateProvisioningArtifactOutput;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
