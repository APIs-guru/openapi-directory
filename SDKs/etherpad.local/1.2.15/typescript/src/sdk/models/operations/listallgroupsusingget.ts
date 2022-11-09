import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllGroupsUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupIDs" })
  groupIDs?: string[];
}


export class ListAllGroupsUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListAllGroupsUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllGroupsUsingGet200ApplicationJsonObject?: ListAllGroupsUsingGet200ApplicationJson;

  @Metadata()
  listAllGroupsUsingGet400ApplicationJsonObject?: ListAllGroupsUsingGet400ApplicationJson;

  @Metadata()
  listAllGroupsUsingGet401ApplicationJsonObject?: ListAllGroupsUsingGet401ApplicationJson;

  @Metadata()
  listAllGroupsUsingGet500ApplicationJsonObject?: ListAllGroupsUsingGet500ApplicationJson;
}
