import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreatePortfolioRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.PortfolioRequestInput;
}


export class CreatePortfolio201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.PortfolioResponse;
}


export class CreatePortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreatePortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePortfolioRequestBodyInput;
}


export class CreatePortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPortfolio201ApplicationJsonObject?: CreatePortfolio201ApplicationJson;
}
