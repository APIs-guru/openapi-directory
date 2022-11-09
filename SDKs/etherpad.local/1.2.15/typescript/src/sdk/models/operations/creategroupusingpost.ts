import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateGroupUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroupUsingPost200ApplicationJsonObject?: CreateGroupUsingPost200ApplicationJson;

  @Metadata()
  createGroupUsingPost400ApplicationJsonObject?: CreateGroupUsingPost400ApplicationJson;

  @Metadata()
  createGroupUsingPost401ApplicationJsonObject?: CreateGroupUsingPost401ApplicationJson;

  @Metadata()
  createGroupUsingPost500ApplicationJsonObject?: CreateGroupUsingPost500ApplicationJson;
}
