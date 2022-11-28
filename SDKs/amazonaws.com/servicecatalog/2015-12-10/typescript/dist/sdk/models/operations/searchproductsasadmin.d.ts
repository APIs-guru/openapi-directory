import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchProductsAsAdminQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum SearchProductsAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceSearchProductsAsAdmin = "AWS242ServiceCatalogService.SearchProductsAsAdmin"
}
export declare class SearchProductsAsAdminHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchProductsAsAdminXAmzTargetEnum;
}
export declare class SearchProductsAsAdminRequest extends SpeakeasyBase {
    queryParams: SearchProductsAsAdminQueryParams;
    headers: SearchProductsAsAdminHeaders;
    request: shared.SearchProductsAsAdminInput;
}
export declare class SearchProductsAsAdminResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    searchProductsAsAdminOutput?: shared.SearchProductsAsAdminOutput;
    statusCode: number;
}
