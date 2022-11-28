import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DecodeViaEpiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class DecodeViaEpiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class DecodeViaEpiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DecodeViaEpiPathParams;

  @SpeakeasyMetadata()
  queryParams: DecodeViaEpiQueryParams;
}


export class DecodeViaEpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  build?: shared.Build;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
