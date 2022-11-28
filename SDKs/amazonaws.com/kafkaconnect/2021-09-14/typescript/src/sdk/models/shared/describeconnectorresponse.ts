import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityDescription } from "./capacitydescription";
import { ConnectorStateEnum } from "./connectorstateenum";
import { KafkaClusterDescription } from "./kafkaclusterdescription";
import { KafkaClusterClientAuthenticationDescription } from "./kafkaclusterclientauthenticationdescription";
import { KafkaClusterEncryptionInTransitDescription } from "./kafkaclusterencryptionintransitdescription";
import { LogDeliveryDescription } from "./logdeliverydescription";
import { PluginDescription } from "./plugindescription";
import { WorkerConfigurationDescription } from "./workerconfigurationdescription";



export class DescribeConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: CapacityDescription;

  @SpeakeasyMetadata({ data: "json, name=connectorArn" })
  connectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorConfiguration" })
  connectorConfiguration?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=connectorDescription" })
  connectorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorState" })
  connectorState?: ConnectorStateEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=currentVersion" })
  currentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kafkaCluster" })
  kafkaCluster?: KafkaClusterDescription;

  @SpeakeasyMetadata({ data: "json, name=kafkaClusterClientAuthentication" })
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  @SpeakeasyMetadata({ data: "json, name=kafkaClusterEncryptionInTransit" })
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  @SpeakeasyMetadata({ data: "json, name=kafkaConnectVersion" })
  kafkaConnectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=logDelivery" })
  logDelivery?: LogDeliveryDescription;

  @SpeakeasyMetadata({ data: "json, name=plugins", elemType: PluginDescription })
  plugins?: PluginDescription[];

  @SpeakeasyMetadata({ data: "json, name=serviceExecutionRoleArn" })
  serviceExecutionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfiguration" })
  workerConfiguration?: WorkerConfigurationDescription;
}
