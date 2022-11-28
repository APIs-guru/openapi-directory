import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSessionInfoUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class GetSessionInfoUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class GetSessionInfoUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: GetSessionInfoUsingPost200ApplicationJsonDataInfo;
}


export class GetSessionInfoUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetSessionInfoUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSessionInfoUsingPostQueryParams;
}


export class GetSessionInfoUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSessionInfoUsingPost200ApplicationJsonObject?: GetSessionInfoUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getSessionInfoUsingPost400ApplicationJsonObject?: GetSessionInfoUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getSessionInfoUsingPost401ApplicationJsonObject?: GetSessionInfoUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getSessionInfoUsingPost500ApplicationJsonObject?: GetSessionInfoUsingPost500ApplicationJson;
}
