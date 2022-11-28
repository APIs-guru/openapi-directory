import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChatHeadUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetChatHeadUsingGet200ApplicationJsonDataChatHead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHeadUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chatHead" })
  chatHead?: GetChatHeadUsingGet200ApplicationJsonDataChatHead;
}


export class GetChatHeadUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetChatHeadUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChatHeadUsingGetQueryParams;
}


export class GetChatHeadUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChatHeadUsingGet200ApplicationJsonObject?: GetChatHeadUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getChatHeadUsingGet400ApplicationJsonObject?: GetChatHeadUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getChatHeadUsingGet401ApplicationJsonObject?: GetChatHeadUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getChatHeadUsingGet500ApplicationJsonObject?: GetChatHeadUsingGet500ApplicationJson;
}
