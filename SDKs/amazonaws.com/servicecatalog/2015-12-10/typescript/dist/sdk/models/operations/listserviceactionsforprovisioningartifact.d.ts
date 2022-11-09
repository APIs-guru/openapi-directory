import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceActionsForProvisioningArtifactQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListServiceActionsForProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceListServiceActionsForProvisioningArtifact = "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact"
}
export declare class ListServiceActionsForProvisioningArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceActionsForProvisioningArtifactXAmzTargetEnum;
}
export declare class ListServiceActionsForProvisioningArtifactRequest extends SpeakeasyBase {
    queryParams: ListServiceActionsForProvisioningArtifactQueryParams;
    headers: ListServiceActionsForProvisioningArtifactHeaders;
    request: shared.ListServiceActionsForProvisioningArtifactInput;
}
export declare class ListServiceActionsForProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listServiceActionsForProvisioningArtifactOutput?: shared.ListServiceActionsForProvisioningArtifactOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
