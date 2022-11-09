import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExchangeRateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetExchangeRateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetExchangeRateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetExchangeRateRequest;
}


export class GetExchangeRateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getExchangeRate?: shared.GetExchangeRate;
}
