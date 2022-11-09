import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppendChatMessageUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;
}


export class AppendChatMessageUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppendChatMessageUsingGetQueryParams;
}


export class AppendChatMessageUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appendChatMessageUsingGet200ApplicationJsonObject?: AppendChatMessageUsingGet200ApplicationJson;

  @Metadata()
  appendChatMessageUsingGet400ApplicationJsonObject?: AppendChatMessageUsingGet400ApplicationJson;

  @Metadata()
  appendChatMessageUsingGet401ApplicationJsonObject?: AppendChatMessageUsingGet401ApplicationJson;

  @Metadata()
  appendChatMessageUsingGet500ApplicationJsonObject?: AppendChatMessageUsingGet500ApplicationJson;
}
