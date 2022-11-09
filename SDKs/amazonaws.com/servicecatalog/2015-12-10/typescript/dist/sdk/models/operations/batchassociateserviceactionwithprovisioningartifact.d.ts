import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"
}
export declare class BatchAssociateServiceActionWithProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}
export declare class BatchAssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
    headers: BatchAssociateServiceActionWithProvisioningArtifactHeaders;
    request: shared.BatchAssociateServiceActionWithProvisioningArtifactInput;
}
export declare class BatchAssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
    batchAssociateServiceActionWithProvisioningArtifactOutput?: shared.BatchAssociateServiceActionWithProvisioningArtifactOutput;
    contentType: string;
    invalidParametersException?: any;
    statusCode: number;
}
