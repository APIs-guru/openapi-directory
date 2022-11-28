import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TwilioMessagePostTwilioPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class TwilioMessagePostTwilioPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TwilioMessagePostTwilioPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TwilioMessageRequest;
}


export class TwilioMessagePostTwilioPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  twilioMessagePostTwilioPost200ApplicationJsonAny?: any;
}
