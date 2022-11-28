import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscordPostDiscordPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class DiscordPostDiscordPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DiscordPostDiscordPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DiscordMessageRequest;
}


export class DiscordPostDiscordPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  discordPostDiscordPost200ApplicationJsonAny?: any;
}
