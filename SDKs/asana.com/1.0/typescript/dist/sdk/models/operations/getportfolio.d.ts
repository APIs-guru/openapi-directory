import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class GetPortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioResponse;
}
export declare class GetPortfolioRequest extends SpeakeasyBase {
    pathParams: GetPortfolioPathParams;
    queryParams: GetPortfolioQueryParams;
}
export declare class GetPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getPortfolio200ApplicationJsonObject?: GetPortfolio200ApplicationJson;
}
