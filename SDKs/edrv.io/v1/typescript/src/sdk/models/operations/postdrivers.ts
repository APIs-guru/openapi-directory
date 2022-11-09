import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostDriversRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PostDriversRequestBodyPhone extends SpeakeasyBase {
  @Metadata({ data: "json, name=home" })
  home?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=work" })
  work?: string;
}

export enum PostDriversRequestBodySourceEnum {
    Physical = "physical"
,    Slack = "slack"
,    Telegram = "telegram"
,    Sms = "sms"
}


export class PostDriversRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=address" })
  address?: PostDriversRequestBodyAddress;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstname" })
  firstname: string;

  @Metadata({ data: "json, name=lastname" })
  lastname: string;

  @Metadata({ data: "json, name=phone" })
  phone?: PostDriversRequestBodyPhone;

  @Metadata({ data: "json, name=source" })
  source: PostDriversRequestBodySourceEnum;
}


export class PostDriversRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostDriversRequestBody;
}


export class PostDrivers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostDriversResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postDrivers200ApplicationJsonObject?: PostDrivers200ApplicationJson;
}
