import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TwilioMessagePostTwilioPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class TwilioMessagePostTwilioPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: TwilioMessagePostTwilioPostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TwilioMessageRequest;
}


export class TwilioMessagePostTwilioPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  twilioMessagePostTwilioPost200ApplicationJsonAny?: any;
}
