import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateReplicaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class CreateReplicaRequestBodyConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


export class CreateReplicaRequestBodyPrivateConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}

export enum CreateReplicaRequestBodyStatusEnum {
    Creating = "creating"
,    Online = "online"
,    Resizing = "resizing"
,    Migrating = "migrating"
,    Forking = "forking"
}


export class CreateReplicaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: CreateReplicaRequestBodyConnection;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_connection" })
  privateConnection?: CreateReplicaRequestBodyPrivateConnection;

  @Metadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=status" })
  status?: CreateReplicaRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateReplicaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateReplicaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateReplicaRequestBody;
}


export class CreateReplica201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=replica" })
  replica?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems;
}


export class CreateReplica401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateReplicaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createReplica201ApplicationJsonObject?: CreateReplica201ApplicationJson;

  @Metadata()
  createReplica401ApplicationJsonObject?: CreateReplica401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
