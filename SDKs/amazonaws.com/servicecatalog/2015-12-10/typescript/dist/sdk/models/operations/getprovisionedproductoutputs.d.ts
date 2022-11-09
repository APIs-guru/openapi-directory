import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProvisionedProductOutputsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum GetProvisionedProductOutputsXAmzTargetEnum {
    Aws242ServiceCatalogServiceGetProvisionedProductOutputs = "AWS242ServiceCatalogService.GetProvisionedProductOutputs"
}
export declare class GetProvisionedProductOutputsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProvisionedProductOutputsXAmzTargetEnum;
}
export declare class GetProvisionedProductOutputsRequest extends SpeakeasyBase {
    queryParams: GetProvisionedProductOutputsQueryParams;
    headers: GetProvisionedProductOutputsHeaders;
    request: shared.GetProvisionedProductOutputsInput;
}
export declare class GetProvisionedProductOutputsResponse extends SpeakeasyBase {
    contentType: string;
    getProvisionedProductOutputsOutput?: shared.GetProvisionedProductOutputsOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
