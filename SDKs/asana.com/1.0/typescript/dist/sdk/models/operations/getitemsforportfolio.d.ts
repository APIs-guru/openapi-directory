import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemsForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class GetItemsForPortfolioQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetItemsForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectCompact[];
}
export declare class GetItemsForPortfolioRequest extends SpeakeasyBase {
    pathParams: GetItemsForPortfolioPathParams;
    queryParams: GetItemsForPortfolioQueryParams;
}
export declare class GetItemsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getItemsForPortfolio200ApplicationJsonObject?: GetItemsForPortfolio200ApplicationJson;
}
