import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostChargePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PostChargeRequestBodyActionEnum {
    Start = "START"
,    Stop = "STOP"
}


export class PostChargeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostChargeRequestBodyActionEnum;
}


export class PostChargeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostChargePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostChargeRequestBody;
}


export class PostCharge200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostChargeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postCharge200ApplicationJsonObject?: PostCharge200ApplicationJson;
}
