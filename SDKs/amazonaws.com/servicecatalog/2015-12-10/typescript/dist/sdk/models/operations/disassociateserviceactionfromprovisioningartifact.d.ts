import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifact = "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact"
}
export declare class DisassociateServiceActionFromProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
}
export declare class DisassociateServiceActionFromProvisioningArtifactRequest extends SpeakeasyBase {
    headers: DisassociateServiceActionFromProvisioningArtifactHeaders;
    request: shared.DisassociateServiceActionFromProvisioningArtifactInput;
}
export declare class DisassociateServiceActionFromProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    disassociateServiceActionFromProvisioningArtifactOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
