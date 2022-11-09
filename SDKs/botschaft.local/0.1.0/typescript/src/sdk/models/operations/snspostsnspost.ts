import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SnsPostSnsPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SnsPostSnsPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: SnsPostSnsPostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SnsMessageRequest;
}


export class SnsPostSnsPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  snsPostSnsPost200ApplicationJsonAny?: any;
}
