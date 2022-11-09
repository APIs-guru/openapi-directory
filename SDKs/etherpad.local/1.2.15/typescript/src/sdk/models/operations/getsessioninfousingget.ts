import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSessionInfoUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class GetSessionInfoUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSessionInfoUsingGetQueryParams;
}


export class GetSessionInfoUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;

  @Metadata({ data: "json, name=groupID" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class GetSessionInfoUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: GetSessionInfoUsingGet200ApplicationJsonDataInfo;
}


export class GetSessionInfoUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetSessionInfoUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSessionInfoUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSessionInfoUsingGet200ApplicationJsonObject?: GetSessionInfoUsingGet200ApplicationJson;

  @Metadata()
  getSessionInfoUsingGet400ApplicationJsonObject?: GetSessionInfoUsingGet400ApplicationJson;

  @Metadata()
  getSessionInfoUsingGet401ApplicationJsonObject?: GetSessionInfoUsingGet401ApplicationJson;

  @Metadata()
  getSessionInfoUsingGet500ApplicationJsonObject?: GetSessionInfoUsingGet500ApplicationJson;
}
