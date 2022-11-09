import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact = "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
}
export declare class BatchDisassociateServiceActionFromProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
}
export declare class BatchDisassociateServiceActionFromProvisioningArtifactRequest extends SpeakeasyBase {
    headers: BatchDisassociateServiceActionFromProvisioningArtifactHeaders;
    request: shared.BatchDisassociateServiceActionFromProvisioningArtifactInput;
}
export declare class BatchDisassociateServiceActionFromProvisioningArtifactResponse extends SpeakeasyBase {
    batchDisassociateServiceActionFromProvisioningArtifactOutput?: shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput;
    contentType: string;
    invalidParametersException?: any;
    statusCode: number;
}
