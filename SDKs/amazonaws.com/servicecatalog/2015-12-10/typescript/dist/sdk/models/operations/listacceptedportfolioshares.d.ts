import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAcceptedPortfolioSharesQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListAcceptedPortfolioSharesXAmzTargetEnum {
    Aws242ServiceCatalogServiceListAcceptedPortfolioShares = "AWS242ServiceCatalogService.ListAcceptedPortfolioShares"
}
export declare class ListAcceptedPortfolioSharesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAcceptedPortfolioSharesXAmzTargetEnum;
}
export declare class ListAcceptedPortfolioSharesRequest extends SpeakeasyBase {
    queryParams: ListAcceptedPortfolioSharesQueryParams;
    headers: ListAcceptedPortfolioSharesHeaders;
    request: shared.ListAcceptedPortfolioSharesInput;
}
export declare class ListAcceptedPortfolioSharesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listAcceptedPortfolioSharesOutput?: shared.ListAcceptedPortfolioSharesOutput;
    operationNotSupportedException?: any;
    statusCode: number;
}
