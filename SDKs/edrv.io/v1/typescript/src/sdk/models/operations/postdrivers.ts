import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDriversRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PostDriversRequestBodyPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=home" })
  home?: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=work" })
  work?: string;
}

export enum PostDriversRequestBodySourceEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}


export class PostDriversRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostDriversRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: PostDriversRequestBodyPhone;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: PostDriversRequestBodySourceEnum;
}


export class PostDrivers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostDriversRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostDriversRequestBody;
}


export class PostDriversResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDrivers200ApplicationJsonObject?: PostDrivers200ApplicationJson;
}
