import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllGroupsUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIDs" })
  groupIDs?: string[];
}


export class ListAllGroupsUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListAllGroupsUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllGroupsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllGroupsUsingGet200ApplicationJsonObject?: ListAllGroupsUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listAllGroupsUsingGet400ApplicationJsonObject?: ListAllGroupsUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listAllGroupsUsingGet401ApplicationJsonObject?: ListAllGroupsUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listAllGroupsUsingGet500ApplicationJsonObject?: ListAllGroupsUsingGet500ApplicationJson;
}
