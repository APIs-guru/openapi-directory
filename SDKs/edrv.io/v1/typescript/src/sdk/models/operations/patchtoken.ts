import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PatchTokenRequestBodyChannelEnum {
    Physical = "physical"
,    Slack = "slack"
,    Telegram = "telegram"
,    Sms = "sms"
}


export class PatchTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=channel" })
  channel?: PatchTokenRequestBodyChannelEnum;

  @Metadata({ data: "json, name=driver" })
  driver?: string;

  @Metadata({ data: "json, name=physicalId" })
  physicalId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class PatchTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchTokenRequestBody;
}


export class PatchToken201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class PatchTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchToken201ApplicationJsonObject?: PatchToken201ApplicationJson;
}
