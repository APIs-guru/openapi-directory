import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabaseClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class GetDatabaseClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabaseClusterPathParams;
}


export class GetDatabaseCluster200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}


export class GetDatabaseCluster401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDatabaseClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDatabaseCluster200ApplicationJsonObject?: GetDatabaseCluster200ApplicationJson;

  @Metadata()
  getDatabaseCluster401ApplicationJsonObject?: GetDatabaseCluster401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
