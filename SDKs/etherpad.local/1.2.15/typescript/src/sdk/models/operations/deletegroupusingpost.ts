import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class DeleteGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteGroupUsingPostQueryParams;
}


export class DeleteGroupUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteGroupUsingPost200ApplicationJsonObject?: DeleteGroupUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingPost400ApplicationJsonObject?: DeleteGroupUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingPost401ApplicationJsonObject?: DeleteGroupUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  deleteGroupUsingPost500ApplicationJsonObject?: DeleteGroupUsingPost500ApplicationJson;
}
