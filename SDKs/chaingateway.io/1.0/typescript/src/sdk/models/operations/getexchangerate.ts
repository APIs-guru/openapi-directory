import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExchangeRateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetExchangeRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetExchangeRateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetExchangeRateRequest;
}


export class GetExchangeRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getExchangeRate?: shared.GetExchangeRate;
}
