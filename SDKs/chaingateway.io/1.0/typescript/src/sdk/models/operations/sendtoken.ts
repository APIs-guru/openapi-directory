import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class SendTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendTokenRequest;
}


export class SendTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sendToken?: shared.SendToken;
}
