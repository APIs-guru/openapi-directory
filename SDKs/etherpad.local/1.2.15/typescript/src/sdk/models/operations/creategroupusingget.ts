import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateGroupUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroupUsingGet200ApplicationJsonObject?: CreateGroupUsingGet200ApplicationJson;

  @Metadata()
  createGroupUsingGet400ApplicationJsonObject?: CreateGroupUsingGet400ApplicationJson;

  @Metadata()
  createGroupUsingGet401ApplicationJsonObject?: CreateGroupUsingGet401ApplicationJson;

  @Metadata()
  createGroupUsingGet500ApplicationJsonObject?: CreateGroupUsingGet500ApplicationJson;
}
