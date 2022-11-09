import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddDatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class AddDatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddDatabasePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}


export class AddDatabase201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems;
}


export class AddDatabase401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addDatabase201ApplicationJsonObject?: AddDatabase201ApplicationJson;

  @Metadata()
  addDatabase401ApplicationJsonObject?: AddDatabase401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
