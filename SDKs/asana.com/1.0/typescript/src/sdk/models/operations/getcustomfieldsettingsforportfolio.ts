import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldSettingsForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class GetCustomFieldSettingsForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetCustomFieldSettingsForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomFieldSettingResponse })
  data?: shared.CustomFieldSettingResponse[];
}


export class GetCustomFieldSettingsForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomFieldSettingsForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomFieldSettingsForPortfolioQueryParams;
}


export class GetCustomFieldSettingsForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomFieldSettingsForPortfolio200ApplicationJsonObject?: GetCustomFieldSettingsForPortfolio200ApplicationJson;
}
