import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class AddUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}


export class AddUser201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}


export class AddUser401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addUser201ApplicationJsonObject?: AddUser201ApplicationJson;

  @Metadata()
  addUser401ApplicationJsonObject?: AddUser401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
