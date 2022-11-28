import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SlackGetSlackGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class SlackGetSlackGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SlackGetSlackGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SlackGetSlackGetQueryParams;

  @SpeakeasyMetadata()
  headers: SlackGetSlackGetHeaders;
}


export class SlackGetSlackGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  slackGetSlackGet200ApplicationJsonAny?: any;
}
