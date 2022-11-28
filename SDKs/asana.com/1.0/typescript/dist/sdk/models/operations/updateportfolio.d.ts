import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class UpdatePortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdatePortfolioRequestBodyInput extends SpeakeasyBase {
    data?: shared.PortfolioRequestInput;
}
export declare class UpdatePortfolio200ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioResponse;
}
export declare class UpdatePortfolioRequest extends SpeakeasyBase {
    pathParams: UpdatePortfolioPathParams;
    queryParams: UpdatePortfolioQueryParams;
    request: UpdatePortfolioRequestBodyInput;
}
export declare class UpdatePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updatePortfolio200ApplicationJsonObject?: UpdatePortfolio200ApplicationJson;
}
