import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact"
}
export declare class AssociateServiceActionWithProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}
export declare class AssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
    headers: AssociateServiceActionWithProvisioningArtifactHeaders;
    request: shared.AssociateServiceActionWithProvisioningArtifactInput;
}
export declare class AssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
    associateServiceActionWithProvisioningArtifactOutput?: Map<string, any>;
    contentType: string;
    duplicateResourceException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
