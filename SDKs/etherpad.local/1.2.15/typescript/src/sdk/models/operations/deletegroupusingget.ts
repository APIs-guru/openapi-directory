import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class DeleteGroupUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteGroupUsingGetQueryParams;
}


export class DeleteGroupUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGroupUsingGet200ApplicationJsonObject?: DeleteGroupUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingGet400ApplicationJsonObject?: DeleteGroupUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingGet401ApplicationJsonObject?: DeleteGroupUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingGet500ApplicationJsonObject?: DeleteGroupUsingGet500ApplicationJson;
}
