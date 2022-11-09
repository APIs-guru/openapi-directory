import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSessionsOfGroupUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListSessionsOfGroupUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSessionsOfGroupUsingPostQueryParams;
}


export class ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;

  @Metadata({ data: "json, name=groupID" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessions", elemType: operations.ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions[];
}


export class ListSessionsOfGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListSessionsOfGroupUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSessionsOfGroupUsingPost200ApplicationJsonObject?: ListSessionsOfGroupUsingPost200ApplicationJson;

  @Metadata()
  listSessionsOfGroupUsingPost400ApplicationJsonObject?: ListSessionsOfGroupUsingPost400ApplicationJson;

  @Metadata()
  listSessionsOfGroupUsingPost401ApplicationJsonObject?: ListSessionsOfGroupUsingPost401ApplicationJson;

  @Metadata()
  listSessionsOfGroupUsingPost500ApplicationJsonObject?: ListSessionsOfGroupUsingPost500ApplicationJson;
}
