import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TwilioMessageGetTwilioGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class TwilioMessageGetTwilioGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class TwilioMessageGetTwilioGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TwilioMessageGetTwilioGetQueryParams;

  @Metadata()
  headers: TwilioMessageGetTwilioGetHeaders;
}


export class TwilioMessageGetTwilioGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  twilioMessageGetTwilioGet200ApplicationJsonAny?: any;
}
