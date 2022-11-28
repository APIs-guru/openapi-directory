import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveCustomFieldSettingForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class RemoveCustomFieldSettingForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.RemoveCustomFieldSettingRequest;
}


export class RemoveCustomFieldSettingForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveCustomFieldSettingForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveCustomFieldSettingForPortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveCustomFieldSettingForPortfolioRequestBody;
}


export class RemoveCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeCustomFieldSettingForPortfolio200ApplicationJsonObject?: RemoveCustomFieldSettingForPortfolio200ApplicationJson;
}
