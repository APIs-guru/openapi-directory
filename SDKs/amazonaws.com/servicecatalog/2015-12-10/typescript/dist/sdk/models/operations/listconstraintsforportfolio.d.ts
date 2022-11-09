import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListConstraintsForPortfolioQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListConstraintsForPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceListConstraintsForPortfolio = "AWS242ServiceCatalogService.ListConstraintsForPortfolio"
}
export declare class ListConstraintsForPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConstraintsForPortfolioXAmzTargetEnum;
}
export declare class ListConstraintsForPortfolioRequest extends SpeakeasyBase {
    queryParams: ListConstraintsForPortfolioQueryParams;
    headers: ListConstraintsForPortfolioHeaders;
    request: shared.ListConstraintsForPortfolioInput;
}
export declare class ListConstraintsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listConstraintsForPortfolioOutput?: shared.ListConstraintsForPortfolioOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
