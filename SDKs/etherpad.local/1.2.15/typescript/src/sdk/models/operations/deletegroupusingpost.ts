import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class DeleteGroupUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteGroupUsingPostQueryParams;
}


export class DeleteGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteGroupUsingPost200ApplicationJsonObject?: DeleteGroupUsingPost200ApplicationJson;

  @Metadata()
  deleteGroupUsingPost400ApplicationJsonObject?: DeleteGroupUsingPost400ApplicationJson;

  @Metadata()
  deleteGroupUsingPost401ApplicationJsonObject?: DeleteGroupUsingPost401ApplicationJson;

  @Metadata()
  deleteGroupUsingPost500ApplicationJsonObject?: DeleteGroupUsingPost500ApplicationJson;
}
