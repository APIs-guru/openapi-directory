import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListProvisioningArtifactsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisioningArtifacts = "AWS242ServiceCatalogService.ListProvisioningArtifacts"
}
export declare class ListProvisioningArtifactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProvisioningArtifactsXAmzTargetEnum;
}
export declare class ListProvisioningArtifactsRequest extends SpeakeasyBase {
    headers: ListProvisioningArtifactsHeaders;
    request: shared.ListProvisioningArtifactsInput;
}
export declare class ListProvisioningArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listProvisioningArtifactsOutput?: shared.ListProvisioningArtifactsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
