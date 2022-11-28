import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppendChatMessageUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;
}


export class AppendChatMessageUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppendChatMessageUsingPostQueryParams;
}


export class AppendChatMessageUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appendChatMessageUsingPost200ApplicationJsonObject?: AppendChatMessageUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  appendChatMessageUsingPost400ApplicationJsonObject?: AppendChatMessageUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  appendChatMessageUsingPost401ApplicationJsonObject?: AppendChatMessageUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  appendChatMessageUsingPost500ApplicationJsonObject?: AppendChatMessageUsingPost500ApplicationJson;
}
