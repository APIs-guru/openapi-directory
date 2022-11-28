import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisioningArtifact = "AWS242ServiceCatalogService.UpdateProvisioningArtifact"
}
export declare class UpdateProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProvisioningArtifactXAmzTargetEnum;
}
export declare class UpdateProvisioningArtifactRequest extends SpeakeasyBase {
    headers: UpdateProvisioningArtifactHeaders;
    request: shared.UpdateProvisioningArtifactInput;
}
export declare class UpdateProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateProvisioningArtifactOutput?: shared.UpdateProvisioningArtifactOutput;
}
