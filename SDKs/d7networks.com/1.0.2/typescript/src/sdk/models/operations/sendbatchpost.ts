import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendbatchPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class SendbatchPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendbatchPostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkSmsRequest;
}


export class SendbatchPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
