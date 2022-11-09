import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatabaseClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateDatabaseClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region: string;
}


export class UpdateDatabaseClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDatabaseClusterPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDatabaseClusterRequestBody;
}


export class UpdateDatabaseCluster401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDatabaseClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDatabaseCluster401ApplicationJsonObject?: UpdateDatabaseCluster401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
