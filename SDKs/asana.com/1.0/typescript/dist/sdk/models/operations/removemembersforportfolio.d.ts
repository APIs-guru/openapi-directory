import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveMembersForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class RemoveMembersForPortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveMembersForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.RemoveMembersRequest;
}
export declare class RemoveMembersForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveMembersForPortfolioRequest extends SpeakeasyBase {
    pathParams: RemoveMembersForPortfolioPathParams;
    queryParams: RemoveMembersForPortfolioQueryParams;
    request: RemoveMembersForPortfolioRequestBody;
}
export declare class RemoveMembersForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeMembersForPortfolio200ApplicationJsonObject?: RemoveMembersForPortfolio200ApplicationJson;
}
