import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddCustomFieldSettingForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class AddCustomFieldSettingForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AddCustomFieldSettingRequest;
}


export class AddCustomFieldSettingForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddCustomFieldSettingForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: AddCustomFieldSettingForPortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddCustomFieldSettingForPortfolioRequestBody;
}


export class AddCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addCustomFieldSettingForPortfolio200ApplicationJsonObject?: AddCustomFieldSettingForPortfolio200ApplicationJson;
}
