import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddCustomFieldSettingForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class AddCustomFieldSettingForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AddCustomFieldSettingRequest;
}


export class AddCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddCustomFieldSettingForPortfolioPathParams;

  @Metadata()
  queryParams: AddCustomFieldSettingForPortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddCustomFieldSettingForPortfolioRequestBody;
}


export class AddCustomFieldSettingForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addCustomFieldSettingForPortfolio200ApplicationJsonObject?: AddCustomFieldSettingForPortfolio200ApplicationJson;
}
