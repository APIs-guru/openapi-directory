import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacityDescription } from "./capacitydescription";
import { ConnectorStateEnum } from "./connectorstateenum";
import { KafkaClusterDescription } from "./kafkaclusterdescription";
import { KafkaClusterClientAuthenticationDescription } from "./kafkaclusterclientauthenticationdescription";
import { KafkaClusterEncryptionInTransitDescription } from "./kafkaclusterencryptionintransitdescription";
import { LogDeliveryDescription } from "./logdeliverydescription";
import { PluginDescription } from "./plugindescription";
import { WorkerConfigurationDescription } from "./workerconfigurationdescription";
export declare class DescribeConnectorResponse extends SpeakeasyBase {
    capacity?: CapacityDescription;
    connectorArn?: string;
    connectorConfiguration?: Map<string, string>;
    connectorDescription?: string;
    connectorName?: string;
    connectorState?: ConnectorStateEnum;
    creationTime?: Date;
    currentVersion?: string;
    kafkaCluster?: KafkaClusterDescription;
    kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
    kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
    kafkaConnectVersion?: string;
    logDelivery?: LogDeliveryDescription;
    plugins?: PluginDescription[];
    serviceExecutionRoleArn?: string;
    workerConfiguration?: WorkerConfigurationDescription;
}
