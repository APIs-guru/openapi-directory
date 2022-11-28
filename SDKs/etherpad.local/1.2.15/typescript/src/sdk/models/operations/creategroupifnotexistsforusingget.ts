import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGroupIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupMapper" })
  groupMapper?: string;
}


export class CreateGroupIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;
}


export class CreateGroupIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateGroupIfNotExistsForUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupIfNotExistsForUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateGroupIfNotExistsForUsingGetQueryParams;
}


export class CreateGroupIfNotExistsForUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGet200ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGet400ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGet401ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createGroupIfNotExistsForUsingGet500ApplicationJsonObject?: CreateGroupIfNotExistsForUsingGet500ApplicationJson;
}
