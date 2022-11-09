import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveCustomFieldSettingForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class RemoveCustomFieldSettingForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.RemoveCustomFieldSettingRequest;
}


export class RemoveCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveCustomFieldSettingForPortfolioPathParams;

  @Metadata()
  queryParams: RemoveCustomFieldSettingForPortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveCustomFieldSettingForPortfolioRequestBody;
}


export class RemoveCustomFieldSettingForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeCustomFieldSettingForPortfolio200ApplicationJsonObject?: RemoveCustomFieldSettingForPortfolio200ApplicationJson;
}
