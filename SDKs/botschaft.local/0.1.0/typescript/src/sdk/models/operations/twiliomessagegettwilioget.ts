import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TwilioMessageGetTwilioGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class TwilioMessageGetTwilioGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class TwilioMessageGetTwilioGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TwilioMessageGetTwilioGetQueryParams;

  @SpeakeasyMetadata()
  headers: TwilioMessageGetTwilioGetHeaders;
}


export class TwilioMessageGetTwilioGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  twilioMessageGetTwilioGet200ApplicationJsonAny?: any;
}
