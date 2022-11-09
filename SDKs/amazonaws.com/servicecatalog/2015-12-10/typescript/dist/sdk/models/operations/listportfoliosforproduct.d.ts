import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPortfoliosForProductQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListPortfoliosForProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfoliosForProduct = "AWS242ServiceCatalogService.ListPortfoliosForProduct"
}
export declare class ListPortfoliosForProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPortfoliosForProductXAmzTargetEnum;
}
export declare class ListPortfoliosForProductRequest extends SpeakeasyBase {
    queryParams: ListPortfoliosForProductQueryParams;
    headers: ListPortfoliosForProductHeaders;
    request: shared.ListPortfoliosForProductInput;
}
export declare class ListPortfoliosForProductResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listPortfoliosForProductOutput?: shared.ListPortfoliosForProductOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
