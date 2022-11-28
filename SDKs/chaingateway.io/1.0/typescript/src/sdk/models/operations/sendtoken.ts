import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class SendTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendTokenHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendTokenRequest;
}


export class SendTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendToken?: shared.SendToken;
}
