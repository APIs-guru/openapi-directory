import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateConnectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
**/
export declare class CreateConnectorRequestBodyCapacity extends SpeakeasyBase {
    autoScaling?: shared.AutoScaling;
    provisionedCapacity?: shared.ProvisionedCapacity;
}
/**
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
export declare class CreateConnectorRequestBodyKafkaCluster extends SpeakeasyBase {
    apacheKafkaCluster?: shared.ApacheKafkaCluster;
}
/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
export declare class CreateConnectorRequestBodyKafkaClusterClientAuthentication extends SpeakeasyBase {
    authenticationType?: shared.KafkaClusterClientAuthenticationTypeEnum;
}
/**
 * Details of encryption in transit to the Apache Kafka cluster.
**/
export declare class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit extends SpeakeasyBase {
    encryptionType?: shared.KafkaClusterEncryptionInTransitTypeEnum;
}
/**
 * Details about log delivery.
**/
export declare class CreateConnectorRequestBodyLogDelivery extends SpeakeasyBase {
    workerLogDelivery?: shared.WorkerLogDelivery;
}
/**
 * The configuration of the workers, which are the processes that run the connector logic.
**/
export declare class CreateConnectorRequestBodyWorkerConfiguration extends SpeakeasyBase {
    revision?: number;
    workerConfigurationArn?: string;
}
export declare class CreateConnectorRequestBody extends SpeakeasyBase {
    capacity: CreateConnectorRequestBodyCapacity;
    connectorConfiguration: Map<string, string>;
    connectorDescription?: string;
    connectorName: string;
    kafkaCluster: CreateConnectorRequestBodyKafkaCluster;
    kafkaClusterClientAuthentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication;
    kafkaClusterEncryptionInTransit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;
    kafkaConnectVersion: string;
    logDelivery?: CreateConnectorRequestBodyLogDelivery;
    plugins: shared.Plugin[];
    serviceExecutionRoleArn: string;
    workerConfiguration?: CreateConnectorRequestBodyWorkerConfiguration;
}
export declare class CreateConnectorRequest extends SpeakeasyBase {
    headers: CreateConnectorHeaders;
    request: CreateConnectorRequestBody;
}
export declare class CreateConnectorResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createConnectorResponse?: shared.CreateConnectorResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
