import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchProductsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum SearchProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProducts = "AWS242ServiceCatalogService.SearchProducts"
}
export declare class SearchProductsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchProductsXAmzTargetEnum;
}
export declare class SearchProductsRequest extends SpeakeasyBase {
    queryParams: SearchProductsQueryParams;
    headers: SearchProductsHeaders;
    request: shared.SearchProductsInput;
}
export declare class SearchProductsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    searchProductsOutput?: shared.SearchProductsOutput;
    statusCode: number;
}
