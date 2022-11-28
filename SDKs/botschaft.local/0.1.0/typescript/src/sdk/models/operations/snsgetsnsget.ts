import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SnsGetSnsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class SnsGetSnsGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SnsGetSnsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SnsGetSnsGetQueryParams;

  @SpeakeasyMetadata()
  headers: SnsGetSnsGetHeaders;
}


export class SnsGetSnsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  snsGetSnsGet200ApplicationJsonAny?: any;
}
