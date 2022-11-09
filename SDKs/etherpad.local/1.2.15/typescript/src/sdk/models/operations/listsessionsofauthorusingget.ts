import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSessionsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListSessionsOfAuthorUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSessionsOfAuthorUsingGetQueryParams;
}


export class ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;

  @Metadata({ data: "json, name=groupID" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessions", elemType: operations.ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions[];
}


export class ListSessionsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListSessionsOfAuthorUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSessionsOfAuthorUsingGet200ApplicationJsonObject?: ListSessionsOfAuthorUsingGet200ApplicationJson;

  @Metadata()
  listSessionsOfAuthorUsingGet400ApplicationJsonObject?: ListSessionsOfAuthorUsingGet400ApplicationJson;

  @Metadata()
  listSessionsOfAuthorUsingGet401ApplicationJsonObject?: ListSessionsOfAuthorUsingGet401ApplicationJson;

  @Metadata()
  listSessionsOfAuthorUsingGet500ApplicationJsonObject?: ListSessionsOfAuthorUsingGet500ApplicationJson;
}
