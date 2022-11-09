import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DestroyReplicaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=replica_name" })
  replicaName: string;
}


export class DestroyReplicaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DestroyReplicaPathParams;
}


export class DestroyReplica401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DestroyReplicaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  destroyReplica401ApplicationJsonObject?: DestroyReplica401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
