import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_name" })
  databaseName: string;
}


export class GetDatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePathParams;
}


export class GetDatabase200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}


export class GetDatabase401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDatabase200ApplicationJsonObject?: GetDatabase200ApplicationJson;

  @Metadata()
  getDatabase401ApplicationJsonObject?: GetDatabase401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
