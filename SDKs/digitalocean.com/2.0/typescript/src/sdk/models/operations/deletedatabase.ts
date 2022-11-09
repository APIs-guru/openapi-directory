import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_name" })
  databaseName: string;
}


export class DeleteDatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatabasePathParams;
}


export class DeleteDatabase401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDatabase401ApplicationJsonObject?: DeleteDatabase401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
