import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscordPostDiscordPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class DiscordPostDiscordPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: DiscordPostDiscordPostHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DiscordMessageRequest;
}


export class DiscordPostDiscordPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  discordPostDiscordPost200ApplicationJsonAny?: any;
}
