import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupMapper" })
  groupMapper?: string;
}


export class CreateGroupIfNotExistsForUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateGroupIfNotExistsForUsingPostQueryParams;
}


export class CreateGroupIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateGroupIfNotExistsForUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroupIfNotExistsForUsingPost200ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost200ApplicationJson;

  @Metadata()
  createGroupIfNotExistsForUsingPost400ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost400ApplicationJson;

  @Metadata()
  createGroupIfNotExistsForUsingPost401ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost401ApplicationJson;

  @Metadata()
  createGroupIfNotExistsForUsingPost500ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost500ApplicationJson;
}
