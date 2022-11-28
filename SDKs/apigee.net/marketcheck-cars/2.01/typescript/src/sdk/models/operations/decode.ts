import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DecodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class DecodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class DecodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DecodePathParams;

  @SpeakeasyMetadata()
  queryParams: DecodeQueryParams;
}


export class DecodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  build?: shared.Build;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
