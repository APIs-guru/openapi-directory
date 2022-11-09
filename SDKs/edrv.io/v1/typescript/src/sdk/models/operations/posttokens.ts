import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTokensRequestBodyChannelEnum {
    Physical = "physical"
,    Slack = "slack"
,    Telegram = "telegram"
,    Sms = "sms"
}


export class PostTokensRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=channel" })
  channel: PostTokensRequestBodyChannelEnum;

  @Metadata({ data: "json, name=driver" })
  driver: string;

  @Metadata({ data: "json, name=physicalId" })
  physicalId: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class PostTokensRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostTokensRequestBody;
}


export class PostTokens201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class PostTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postTokens201ApplicationJsonObject?: PostTokens201ApplicationJson;
}
