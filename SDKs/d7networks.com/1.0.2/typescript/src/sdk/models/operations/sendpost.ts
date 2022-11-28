import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class SendPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendSmsRequest;
}


export class SendPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sendPost500ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
