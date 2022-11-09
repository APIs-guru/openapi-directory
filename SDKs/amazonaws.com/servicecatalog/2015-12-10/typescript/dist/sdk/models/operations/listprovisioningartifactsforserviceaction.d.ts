import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListProvisioningArtifactsForServiceActionQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListProvisioningArtifactsForServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"
}
export declare class ListProvisioningArtifactsForServiceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProvisioningArtifactsForServiceActionXAmzTargetEnum;
}
export declare class ListProvisioningArtifactsForServiceActionRequest extends SpeakeasyBase {
    queryParams: ListProvisioningArtifactsForServiceActionQueryParams;
    headers: ListProvisioningArtifactsForServiceActionHeaders;
    request: shared.ListProvisioningArtifactsForServiceActionInput;
}
export declare class ListProvisioningArtifactsForServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listProvisioningArtifactsForServiceActionOutput?: shared.ListProvisioningArtifactsForServiceActionOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
