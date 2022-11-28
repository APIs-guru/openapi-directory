import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SnsPostSnsPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SnsPostSnsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SnsPostSnsPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SnsMessageRequest;
}


export class SnsPostSnsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  snsPostSnsPost200ApplicationJsonAny?: any;
}
