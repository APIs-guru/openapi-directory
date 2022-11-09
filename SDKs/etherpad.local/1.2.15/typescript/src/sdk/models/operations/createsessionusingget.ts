import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSessionUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=validUntil" })
  validUntil?: string;
}


export class CreateSessionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateSessionUsingGetQueryParams;
}


export class CreateSessionUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionID" })
  sessionId?: string;
}


export class CreateSessionUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateSessionUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createSessionUsingGet200ApplicationJsonObject?: CreateSessionUsingGet200ApplicationJson;

  @Metadata()
  createSessionUsingGet400ApplicationJsonObject?: CreateSessionUsingGet400ApplicationJson;

  @Metadata()
  createSessionUsingGet401ApplicationJsonObject?: CreateSessionUsingGet401ApplicationJson;

  @Metadata()
  createSessionUsingGet500ApplicationJsonObject?: CreateSessionUsingGet500ApplicationJson;
}
