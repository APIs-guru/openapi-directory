import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddMembersForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class AddMembersForPortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddMembersForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.AddMembersRequest;
}
export declare class AddMembersForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddMembersForPortfolioRequest extends SpeakeasyBase {
    pathParams: AddMembersForPortfolioPathParams;
    queryParams: AddMembersForPortfolioQueryParams;
    request: AddMembersForPortfolioRequestBody;
}
export declare class AddMembersForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addMembersForPortfolio200ApplicationJsonObject?: AddMembersForPortfolio200ApplicationJson;
}
