import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class SendPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendPostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendSmsRequest;
}


export class SendPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sendPost500ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
