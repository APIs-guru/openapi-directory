import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupMapper" })
  groupMapper?: string;
}


export class CreateGroupIfNotExistsForUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateGroupIfNotExistsForUsingGetQueryParams;
}


export class CreateGroupIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateGroupIfNotExistsForUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroupIfNotExistsForUsingGet200ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet200ApplicationJson;

  @Metadata()
  createGroupIfNotExistsForUsingGet400ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet400ApplicationJson;

  @Metadata()
  createGroupIfNotExistsForUsingGet401ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet401ApplicationJson;

  @Metadata()
  createGroupIfNotExistsForUsingGet500ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet500ApplicationJson;
}
