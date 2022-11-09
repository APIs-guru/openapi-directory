import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSessionsOfGroupUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListSessionsOfGroupUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSessionsOfGroupUsingGetQueryParams;
}


export class ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;

  @Metadata({ data: "json, name=groupID" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessions", elemType: operations.ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions[];
}


export class ListSessionsOfGroupUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListSessionsOfGroupUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSessionsOfGroupUsingGet200ApplicationJsonObject?: ListSessionsOfGroupUsingGet200ApplicationJson;

  @Metadata()
  listSessionsOfGroupUsingGet400ApplicationJsonObject?: ListSessionsOfGroupUsingGet400ApplicationJson;

  @Metadata()
  listSessionsOfGroupUsingGet401ApplicationJsonObject?: ListSessionsOfGroupUsingGet401ApplicationJson;

  @Metadata()
  listSessionsOfGroupUsingGet500ApplicationJsonObject?: ListSessionsOfGroupUsingGet500ApplicationJson;
}
