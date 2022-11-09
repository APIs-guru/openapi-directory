import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllGroupsUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupIDs" })
  groupIDs?: string[];
}


export class ListAllGroupsUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListAllGroupsUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllGroupsUsingPost200ApplicationJsonObject?: ListAllGroupsUsingPost200ApplicationJson;

  @Metadata()
  listAllGroupsUsingPost400ApplicationJsonObject?: ListAllGroupsUsingPost400ApplicationJson;

  @Metadata()
  listAllGroupsUsingPost401ApplicationJsonObject?: ListAllGroupsUsingPost401ApplicationJson;

  @Metadata()
  listAllGroupsUsingPost500ApplicationJsonObject?: ListAllGroupsUsingPost500ApplicationJson;
}
