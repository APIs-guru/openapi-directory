import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PatchTokenRequestBodyChannelEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}


export class PatchTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: PatchTokenRequestBodyChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalId" })
  physicalId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PatchToken201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class PatchTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchTokenRequestBody;
}


export class PatchTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchToken201ApplicationJsonObject?: PatchToken201ApplicationJson;
}
