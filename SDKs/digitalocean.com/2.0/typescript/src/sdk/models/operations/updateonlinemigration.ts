import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateOnlineMigrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateOnlineMigrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=disable_ssl" })
  disableSsl?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesConnectionAllOf0;
}


export class UpdateOnlineMigrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOnlineMigrationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateOnlineMigrationRequestBody;
}


export class UpdateOnlineMigration200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class UpdateOnlineMigration401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateOnlineMigrationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOnlineMigration200ApplicationJsonObject?: UpdateOnlineMigration200ApplicationJson;

  @Metadata()
  updateOnlineMigration401ApplicationJsonObject?: UpdateOnlineMigration401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
