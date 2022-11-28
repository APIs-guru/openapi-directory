import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldSettingsForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class GetCustomFieldSettingsForPortfolioQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetCustomFieldSettingsForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldSettingResponse[];
}
export declare class GetCustomFieldSettingsForPortfolioRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldSettingsForPortfolioPathParams;
    queryParams: GetCustomFieldSettingsForPortfolioQueryParams;
}
export declare class GetCustomFieldSettingsForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getCustomFieldSettingsForPortfolio200ApplicationJsonObject?: GetCustomFieldSettingsForPortfolio200ApplicationJson;
}
