import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChatHistoryUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetChatHistoryUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChatHistoryUsingGetQueryParams;
}


export class GetChatHistoryUsingGet200ApplicationJsonDataMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHistoryUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: operations.GetChatHistoryUsingGet200ApplicationJsonDataMessages })
  messages?: GetChatHistoryUsingGet200ApplicationJsonDataMessages[];
}


export class GetChatHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetChatHistoryUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getChatHistoryUsingGet200ApplicationJsonObject?: GetChatHistoryUsingGet200ApplicationJson;

  @Metadata()
  getChatHistoryUsingGet400ApplicationJsonObject?: GetChatHistoryUsingGet400ApplicationJson;

  @Metadata()
  getChatHistoryUsingGet401ApplicationJsonObject?: GetChatHistoryUsingGet401ApplicationJson;

  @Metadata()
  getChatHistoryUsingGet500ApplicationJsonObject?: GetChatHistoryUsingGet500ApplicationJson;
}
