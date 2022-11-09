import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetAuthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ResetAuthRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysql_settings" })
  mysqlSettings?: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings;
}


export class ResetAuthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetAuthPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ResetAuthRequestBody;
}


export class ResetAuth200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}


export class ResetAuth401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ResetAuthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  resetAuth200ApplicationJsonObject?: ResetAuth200ApplicationJson;

  @Metadata()
  resetAuth401ApplicationJsonObject?: ResetAuth401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
