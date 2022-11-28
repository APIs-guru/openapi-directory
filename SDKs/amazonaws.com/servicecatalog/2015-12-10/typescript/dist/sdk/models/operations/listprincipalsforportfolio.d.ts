import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPrincipalsForPortfolioQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListPrincipalsForPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPrincipalsForPortfolio = "AWS242ServiceCatalogService.ListPrincipalsForPortfolio"
}
export declare class ListPrincipalsForPortfolioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPrincipalsForPortfolioXAmzTargetEnum;
}
export declare class ListPrincipalsForPortfolioRequest extends SpeakeasyBase {
    queryParams: ListPrincipalsForPortfolioQueryParams;
    headers: ListPrincipalsForPortfolioHeaders;
    request: shared.ListPrincipalsForPortfolioInput;
}
export declare class ListPrincipalsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listPrincipalsForPortfolioOutput?: shared.ListPrincipalsForPortfolioOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
