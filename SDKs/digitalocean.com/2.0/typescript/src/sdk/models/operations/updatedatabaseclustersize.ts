import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatabaseClusterSizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class UpdateDatabaseClusterSizeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=num_nodes" })
  numNodes: number;

  @Metadata({ data: "json, name=size" })
  size: string;
}


export class UpdateDatabaseClusterSizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDatabaseClusterSizePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDatabaseClusterSizeRequestBody;
}


export class UpdateDatabaseClusterSize401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateDatabaseClusterSizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDatabaseClusterSize401ApplicationJsonObject?: UpdateDatabaseClusterSize401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
