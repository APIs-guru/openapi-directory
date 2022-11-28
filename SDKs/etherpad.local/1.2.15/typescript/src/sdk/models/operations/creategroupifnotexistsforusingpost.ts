import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGroupIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMapper" })
  groupMapper?: string;
}


export class CreateGroupIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateGroupIfNotExistsForUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateGroupIfNotExistsForUsingPostQueryParams;
}


export class CreateGroupIfNotExistsForUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPost200ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPost400ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPost401ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingPost500ApplicationJsonObject?: CreateGroupIfNotExistsForUsingPost500ApplicationJson;
}
