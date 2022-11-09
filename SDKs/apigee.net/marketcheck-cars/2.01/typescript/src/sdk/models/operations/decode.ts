import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DecodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class DecodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class DecodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DecodePathParams;

  @Metadata()
  queryParams: DecodeQueryParams;
}


export class DecodeResponse extends SpeakeasyBase {
  @Metadata()
  build?: shared.Build;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
