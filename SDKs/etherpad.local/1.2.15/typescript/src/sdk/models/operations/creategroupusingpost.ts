import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateGroupUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGroupUsingPost200ApplicationJsonObject?: CreateGroupUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createGroupUsingPost400ApplicationJsonObject?: CreateGroupUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createGroupUsingPost401ApplicationJsonObject?: CreateGroupUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createGroupUsingPost500ApplicationJsonObject?: CreateGroupUsingPost500ApplicationJson;
}
