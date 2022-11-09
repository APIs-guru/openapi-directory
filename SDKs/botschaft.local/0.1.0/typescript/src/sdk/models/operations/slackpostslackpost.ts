import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SlackPostSlackPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SlackPostSlackPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: SlackPostSlackPostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SlackMessageRequest;
}


export class SlackPostSlackPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  slackPostSlackPost200ApplicationJsonAny?: any;
}
