import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChatHistoryUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetChatHistoryUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChatHistoryUsingPostQueryParams;
}


export class GetChatHistoryUsingPost200ApplicationJsonDataMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHistoryUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: operations.GetChatHistoryUsingPost200ApplicationJsonDataMessages })
  messages?: GetChatHistoryUsingPost200ApplicationJsonDataMessages[];
}


export class GetChatHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetChatHistoryUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHistoryUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getChatHistoryUsingPost200ApplicationJsonObject?: GetChatHistoryUsingPost200ApplicationJson;

  @Metadata()
  getChatHistoryUsingPost400ApplicationJsonObject?: GetChatHistoryUsingPost400ApplicationJson;

  @Metadata()
  getChatHistoryUsingPost401ApplicationJsonObject?: GetChatHistoryUsingPost401ApplicationJson;

  @Metadata()
  getChatHistoryUsingPost500ApplicationJsonObject?: GetChatHistoryUsingPost500ApplicationJson;
}
