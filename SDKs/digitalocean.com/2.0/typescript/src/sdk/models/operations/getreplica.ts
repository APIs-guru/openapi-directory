import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReplicaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=replica_name" })
  replicaName: string;
}


export class GetReplicaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReplicaPathParams;
}


export class GetReplica200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=replica" })
  replica?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems;
}


export class GetReplica401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetReplicaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getReplica200ApplicationJsonObject?: GetReplica200ApplicationJson;

  @Metadata()
  getReplica401ApplicationJsonObject?: GetReplica401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
