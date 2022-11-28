import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioMembershipsForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class GetPortfolioMembershipsForPortfolioQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    user?: string;
}
export declare class GetPortfolioMembershipsForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioMembershipCompact[];
}
export declare class GetPortfolioMembershipsForPortfolioRequest extends SpeakeasyBase {
    pathParams: GetPortfolioMembershipsForPortfolioPathParams;
    queryParams: GetPortfolioMembershipsForPortfolioQueryParams;
}
export declare class GetPortfolioMembershipsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getPortfolioMembershipsForPortfolio200ApplicationJsonObject?: GetPortfolioMembershipsForPortfolio200ApplicationJson;
}
