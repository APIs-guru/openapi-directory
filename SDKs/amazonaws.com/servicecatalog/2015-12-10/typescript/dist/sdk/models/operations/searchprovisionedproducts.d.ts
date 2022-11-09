import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchProvisionedProductsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum SearchProvisionedProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProvisionedProducts = "AWS242ServiceCatalogService.SearchProvisionedProducts"
}
export declare class SearchProvisionedProductsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchProvisionedProductsXAmzTargetEnum;
}
export declare class SearchProvisionedProductsRequest extends SpeakeasyBase {
    queryParams: SearchProvisionedProductsQueryParams;
    headers: SearchProvisionedProductsHeaders;
    request: shared.SearchProvisionedProductsInput;
}
export declare class SearchProvisionedProductsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    searchProvisionedProductsOutput?: shared.SearchProvisionedProductsOutput;
    statusCode: number;
}
