import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllGroupsUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIDs" })
  groupIDs?: string[];
}


export class ListAllGroupsUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListAllGroupsUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllGroupsUsingPost200ApplicationJsonObject?: ListAllGroupsUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listAllGroupsUsingPost400ApplicationJsonObject?: ListAllGroupsUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listAllGroupsUsingPost401ApplicationJsonObject?: ListAllGroupsUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listAllGroupsUsingPost500ApplicationJsonObject?: ListAllGroupsUsingPost500ApplicationJson;
}
