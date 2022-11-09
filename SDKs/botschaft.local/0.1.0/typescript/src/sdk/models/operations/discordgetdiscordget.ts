import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscordGetDiscordGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channel" })
  channel: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class DiscordGetDiscordGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class DiscordGetDiscordGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DiscordGetDiscordGetQueryParams;

  @Metadata()
  headers: DiscordGetDiscordGetHeaders;
}


export class DiscordGetDiscordGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  discordGetDiscordGet200ApplicationJsonAny?: any;
}
