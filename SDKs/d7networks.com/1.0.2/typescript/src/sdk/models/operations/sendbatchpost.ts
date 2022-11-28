import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendbatchPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class SendbatchPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendbatchPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkSmsRequest;
}


export class SendbatchPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
