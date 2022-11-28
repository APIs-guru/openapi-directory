import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProvisioningArtifact = "AWS242ServiceCatalogService.DeleteProvisioningArtifact"
}
export declare class DeleteProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProvisioningArtifactXAmzTargetEnum;
}
export declare class DeleteProvisioningArtifactRequest extends SpeakeasyBase {
    headers: DeleteProvisioningArtifactHeaders;
    request: shared.DeleteProvisioningArtifactInput;
}
export declare class DeleteProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    deleteProvisioningArtifactOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
