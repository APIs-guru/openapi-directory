import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddItemForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class AddItemForPortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddItemForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.PortfolioAddItemRequest;
}
export declare class AddItemForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddItemForPortfolioRequest extends SpeakeasyBase {
    pathParams: AddItemForPortfolioPathParams;
    queryParams: AddItemForPortfolioQueryParams;
    request: AddItemForPortfolioRequestBody;
}
export declare class AddItemForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addItemForPortfolio200ApplicationJsonObject?: AddItemForPortfolio200ApplicationJson;
}
