import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityDescription } from "./capacitydescription";
import { ConnectorStateEnum } from "./connectorstateenum";
import { KafkaClusterDescription } from "./kafkaclusterdescription";
import { KafkaClusterClientAuthenticationDescription } from "./kafkaclusterclientauthenticationdescription";
import { KafkaClusterEncryptionInTransitDescription } from "./kafkaclusterencryptionintransitdescription";
import { LogDeliveryDescription } from "./logdeliverydescription";
import { PluginDescription } from "./plugindescription";
import { WorkerConfigurationDescription } from "./workerconfigurationdescription";


export class DescribeConnectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: CapacityDescription;

  @Metadata({ data: "json, name=connectorArn" })
  connectorArn?: string;

  @Metadata({ data: "json, name=connectorConfiguration" })
  connectorConfiguration?: Map<string, string>;

  @Metadata({ data: "json, name=connectorDescription" })
  connectorDescription?: string;

  @Metadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @Metadata({ data: "json, name=connectorState" })
  connectorState?: ConnectorStateEnum;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=currentVersion" })
  currentVersion?: string;

  @Metadata({ data: "json, name=kafkaCluster" })
  kafkaCluster?: KafkaClusterDescription;

  @Metadata({ data: "json, name=kafkaClusterClientAuthentication" })
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  @Metadata({ data: "json, name=kafkaClusterEncryptionInTransit" })
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  @Metadata({ data: "json, name=kafkaConnectVersion" })
  kafkaConnectVersion?: string;

  @Metadata({ data: "json, name=logDelivery" })
  logDelivery?: LogDeliveryDescription;

  @Metadata({ data: "json, name=plugins", elemType: shared.PluginDescription })
  plugins?: PluginDescription[];

  @Metadata({ data: "json, name=serviceExecutionRoleArn" })
  serviceExecutionRoleArn?: string;

  @Metadata({ data: "json, name=workerConfiguration" })
  workerConfiguration?: WorkerConfigurationDescription;
}
