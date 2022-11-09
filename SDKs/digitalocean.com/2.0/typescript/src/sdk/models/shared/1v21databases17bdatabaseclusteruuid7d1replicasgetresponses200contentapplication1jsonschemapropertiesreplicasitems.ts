import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection extends SpeakeasyBase {
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


export class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection extends SpeakeasyBase {
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

export enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum {
    Creating = "creating"
,    Online = "online"
,    Resizing = "resizing"
,    Migrating = "migrating"
,    Forking = "forking"
}


export class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_connection" })
  privateConnection?: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection;

  @Metadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
