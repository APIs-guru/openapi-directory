import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChatHeadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetChatHeadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChatHeadUsingPostQueryParams;
}


export class GetChatHeadUsingPost200ApplicationJsonDataChatHead extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHeadUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=chatHead" })
  chatHead?: GetChatHeadUsingPost200ApplicationJsonDataChatHead;
}


export class GetChatHeadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetChatHeadUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getChatHeadUsingPost200ApplicationJsonObject?: GetChatHeadUsingPost200ApplicationJson;

  @Metadata()
  getChatHeadUsingPost400ApplicationJsonObject?: GetChatHeadUsingPost400ApplicationJson;

  @Metadata()
  getChatHeadUsingPost401ApplicationJsonObject?: GetChatHeadUsingPost401ApplicationJson;

  @Metadata()
  getChatHeadUsingPost500ApplicationJsonObject?: GetChatHeadUsingPost500ApplicationJson;
}
