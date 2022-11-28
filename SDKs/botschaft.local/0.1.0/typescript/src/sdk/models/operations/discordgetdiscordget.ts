import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscordGetDiscordGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" })
  base64Message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;
}


export class DiscordGetDiscordGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;
}


export class DiscordGetDiscordGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DiscordGetDiscordGetQueryParams;

  @SpeakeasyMetadata()
  headers: DiscordGetDiscordGetHeaders;
}


export class DiscordGetDiscordGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  discordGetDiscordGet200ApplicationJsonAny?: any;
}
