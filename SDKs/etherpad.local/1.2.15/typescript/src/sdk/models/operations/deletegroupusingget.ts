import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class DeleteGroupUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteGroupUsingGetQueryParams;
}


export class DeleteGroupUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteGroupUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteGroupUsingGet200ApplicationJsonObject?: DeleteGroupUsingGet200ApplicationJson;

  @Metadata()
  deleteGroupUsingGet400ApplicationJsonObject?: DeleteGroupUsingGet400ApplicationJson;

  @Metadata()
  deleteGroupUsingGet401ApplicationJsonObject?: DeleteGroupUsingGet401ApplicationJson;

  @Metadata()
  deleteGroupUsingGet500ApplicationJsonObject?: DeleteGroupUsingGet500ApplicationJson;
}
