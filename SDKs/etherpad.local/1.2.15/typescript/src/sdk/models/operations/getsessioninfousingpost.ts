import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSessionInfoUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class GetSessionInfoUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSessionInfoUsingPostQueryParams;
}


export class GetSessionInfoUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;

  @Metadata({ data: "json, name=groupID" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class GetSessionInfoUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: GetSessionInfoUsingPost200ApplicationJsonDataInfo;
}


export class GetSessionInfoUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetSessionInfoUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSessionInfoUsingPost200ApplicationJsonObject?: GetSessionInfoUsingPost200ApplicationJson;

  @Metadata()
  getSessionInfoUsingPost400ApplicationJsonObject?: GetSessionInfoUsingPost400ApplicationJson;

  @Metadata()
  getSessionInfoUsingPost401ApplicationJsonObject?: GetSessionInfoUsingPost401ApplicationJson;

  @Metadata()
  getSessionInfoUsingPost500ApplicationJsonObject?: GetSessionInfoUsingPost500ApplicationJson;
}
