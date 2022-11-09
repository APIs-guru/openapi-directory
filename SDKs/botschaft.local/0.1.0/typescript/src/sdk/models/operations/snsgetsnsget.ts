import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SnsGetSnsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class SnsGetSnsGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SnsGetSnsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SnsGetSnsGetQueryParams;

  @Metadata()
  headers: SnsGetSnsGetHeaders;
}


export class SnsGetSnsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  snsGetSnsGet200ApplicationJsonAny?: any;
}
