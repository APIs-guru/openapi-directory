import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class DeletePortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeletePortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeletePortfolioRequest extends SpeakeasyBase {
    pathParams: DeletePortfolioPathParams;
    queryParams: DeletePortfolioQueryParams;
}
export declare class DeletePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deletePortfolio200ApplicationJsonObject?: DeletePortfolio200ApplicationJson;
}
