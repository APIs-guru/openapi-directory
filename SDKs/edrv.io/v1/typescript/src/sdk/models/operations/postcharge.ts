import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostChargePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum PostChargeRequestBodyActionEnum {
    Start = "START",
    Stop = "STOP"
}


export class PostChargeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostChargeRequestBodyActionEnum;
}


export class PostCharge200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostChargePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostChargeRequestBody;
}


export class PostChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postCharge200ApplicationJsonObject?: PostCharge200ApplicationJson;
}
