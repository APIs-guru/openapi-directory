import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChatHeadUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetChatHeadUsingPost200ApplicationJsonDataChatHead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}


export class GetChatHeadUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chatHead" })
  chatHead?: GetChatHeadUsingPost200ApplicationJsonDataChatHead;
}


export class GetChatHeadUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetChatHeadUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChatHeadUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChatHeadUsingPostQueryParams;
}


export class GetChatHeadUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChatHeadUsingPost200ApplicationJsonObject?: GetChatHeadUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getChatHeadUsingPost400ApplicationJsonObject?: GetChatHeadUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getChatHeadUsingPost401ApplicationJsonObject?: GetChatHeadUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getChatHeadUsingPost500ApplicationJsonObject?: GetChatHeadUsingPost500ApplicationJson;
}
