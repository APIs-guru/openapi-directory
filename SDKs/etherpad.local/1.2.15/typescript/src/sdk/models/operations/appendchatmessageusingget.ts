import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppendChatMessageUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;
}


export class AppendChatMessageUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AppendChatMessageUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppendChatMessageUsingGetQueryParams;
}


export class AppendChatMessageUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appendChatMessageUsingGet200ApplicationJsonObject?: AppendChatMessageUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  appendChatMessageUsingGet400ApplicationJsonObject?: AppendChatMessageUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  appendChatMessageUsingGet401ApplicationJsonObject?: AppendChatMessageUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  appendChatMessageUsingGet500ApplicationJsonObject?: AppendChatMessageUsingGet500ApplicationJson;
}
