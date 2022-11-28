import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveCustomFieldSettingForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class RemoveCustomFieldSettingForPortfolioQueryParams extends SpeakeasyBase {
    optPretty?: boolean;
}
export declare class RemoveCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.RemoveCustomFieldSettingRequest;
}
export declare class RemoveCustomFieldSettingForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
    pathParams: RemoveCustomFieldSettingForPortfolioPathParams;
    queryParams: RemoveCustomFieldSettingForPortfolioQueryParams;
    request: RemoveCustomFieldSettingForPortfolioRequestBody;
}
export declare class RemoveCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeCustomFieldSettingForPortfolio200ApplicationJsonObject?: RemoveCustomFieldSettingForPortfolio200ApplicationJson;
}
