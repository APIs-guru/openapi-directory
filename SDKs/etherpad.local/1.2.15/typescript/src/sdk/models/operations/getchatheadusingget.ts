import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChatHeadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetChatHeadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChatHeadUsingGetQueryParams;
}


export class GetChatHeadUsingGet200ApplicationJsonDataChatHead extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHeadUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=chatHead" })
  chatHead?: GetChatHeadUsingGet200ApplicationJsonDataChatHead;
}


export class GetChatHeadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetChatHeadUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getChatHeadUsingGet200ApplicationJsonObject?: GetChatHeadUsingGet200ApplicationJson;

  @Metadata()
  getChatHeadUsingGet400ApplicationJsonObject?: GetChatHeadUsingGet400ApplicationJson;

  @Metadata()
  getChatHeadUsingGet401ApplicationJsonObject?: GetChatHeadUsingGet401ApplicationJson;

  @Metadata()
  getChatHeadUsingGet500ApplicationJsonObject?: GetChatHeadUsingGet500ApplicationJson;
}
