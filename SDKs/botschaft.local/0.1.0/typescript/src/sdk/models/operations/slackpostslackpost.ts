import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SlackPostSlackPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class SlackPostSlackPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SlackPostSlackPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SlackMessageRequest;
}


export class SlackPostSlackPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  slackPostSlackPost200ApplicationJsonAny?: any;
}
