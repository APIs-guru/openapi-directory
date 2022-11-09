import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DecodeViaEpiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class DecodeViaEpiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class DecodeViaEpiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DecodeViaEpiPathParams;

  @Metadata()
  queryParams: DecodeViaEpiQueryParams;
}


export class DecodeViaEpiResponse extends SpeakeasyBase {
  @Metadata()
  build?: shared.Build;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
