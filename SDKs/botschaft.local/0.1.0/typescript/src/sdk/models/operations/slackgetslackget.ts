import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SlackGetSlackGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channel" })
  channel: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class SlackGetSlackGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SlackGetSlackGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SlackGetSlackGetQueryParams;

  @Metadata()
  headers: SlackGetSlackGetHeaders;
}


export class SlackGetSlackGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  slackGetSlackGet200ApplicationJsonAny?: any;
}
