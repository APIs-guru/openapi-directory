import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostTokensRequestBodyChannelEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}


export class PostTokensRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: PostTokensRequestBodyChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver: string;

  @SpeakeasyMetadata({ data: "json, name=physicalId" })
  physicalId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PostTokens201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class PostTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostTokensRequestBody;
}


export class PostTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTokens201ApplicationJsonObject?: PostTokens201ApplicationJson;
}
