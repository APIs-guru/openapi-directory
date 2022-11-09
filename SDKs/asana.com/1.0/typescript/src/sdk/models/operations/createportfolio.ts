import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreatePortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioRequest;
}


export class CreatePortfolioRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreatePortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePortfolioRequestBody;
}


export class CreatePortfolio201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioResponse;
}


export class CreatePortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPortfolio201ApplicationJsonObject?: CreatePortfolio201ApplicationJson;
}
