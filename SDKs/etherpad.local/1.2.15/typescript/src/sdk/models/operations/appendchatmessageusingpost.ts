import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppendChatMessageUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;
}


export class AppendChatMessageUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppendChatMessageUsingPostQueryParams;
}


export class AppendChatMessageUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appendChatMessageUsingPost200ApplicationJsonObject?: AppendChatMessageUsingPost200ApplicationJson;

  @Metadata()
  appendChatMessageUsingPost400ApplicationJsonObject?: AppendChatMessageUsingPost400ApplicationJson;

  @Metadata()
  appendChatMessageUsingPost401ApplicationJsonObject?: AppendChatMessageUsingPost401ApplicationJson;

  @Metadata()
  appendChatMessageUsingPost500ApplicationJsonObject?: AppendChatMessageUsingPost500ApplicationJson;
}
