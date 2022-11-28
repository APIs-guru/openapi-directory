import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveItemForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class RemoveItemForPortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveItemForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.PortfolioRemoveItemRequest;
}
export declare class RemoveItemForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveItemForPortfolioRequest extends SpeakeasyBase {
    pathParams: RemoveItemForPortfolioPathParams;
    queryParams: RemoveItemForPortfolioQueryParams;
    request: RemoveItemForPortfolioRequestBody;
}
export declare class RemoveItemForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeItemForPortfolio200ApplicationJsonObject?: RemoveItemForPortfolio200ApplicationJson;
}
