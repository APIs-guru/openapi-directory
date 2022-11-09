import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConnectorHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateConnectorRequestBodyCapacity
/** 
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
**/
export class CreateConnectorRequestBodyCapacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScaling" })
  autoScaling?: shared.AutoScaling;

  @Metadata({ data: "json, name=provisionedCapacity" })
  provisionedCapacity?: shared.ProvisionedCapacity;
}


// CreateConnectorRequestBodyKafkaCluster
/** 
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
export class CreateConnectorRequestBodyKafkaCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=apacheKafkaCluster" })
  apacheKafkaCluster?: shared.ApacheKafkaCluster;
}


// CreateConnectorRequestBodyKafkaClusterClientAuthentication
/** 
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
export class CreateConnectorRequestBodyKafkaClusterClientAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationType" })
  authenticationType?: shared.KafkaClusterClientAuthenticationTypeEnum;
}


// CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
/** 
 * Details of encryption in transit to the Apache Kafka cluster.
**/
export class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionType" })
  encryptionType?: shared.KafkaClusterEncryptionInTransitTypeEnum;
}


// CreateConnectorRequestBodyLogDelivery
/** 
 * Details about log delivery.
**/
export class CreateConnectorRequestBodyLogDelivery extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerLogDelivery" })
  workerLogDelivery?: shared.WorkerLogDelivery;
}


// CreateConnectorRequestBodyWorkerConfiguration
/** 
 * The configuration of the workers, which are the processes that run the connector logic.
**/
export class CreateConnectorRequestBodyWorkerConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}


export class CreateConnectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity: CreateConnectorRequestBodyCapacity;

  @Metadata({ data: "json, name=connectorConfiguration" })
  connectorConfiguration: Map<string, string>;

  @Metadata({ data: "json, name=connectorDescription" })
  connectorDescription?: string;

  @Metadata({ data: "json, name=connectorName" })
  connectorName: string;

  @Metadata({ data: "json, name=kafkaCluster" })
  kafkaCluster: CreateConnectorRequestBodyKafkaCluster;

  @Metadata({ data: "json, name=kafkaClusterClientAuthentication" })
  kafkaClusterClientAuthentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication;

  @Metadata({ data: "json, name=kafkaClusterEncryptionInTransit" })
  kafkaClusterEncryptionInTransit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;

  @Metadata({ data: "json, name=kafkaConnectVersion" })
  kafkaConnectVersion: string;

  @Metadata({ data: "json, name=logDelivery" })
  logDelivery?: CreateConnectorRequestBodyLogDelivery;

  @Metadata({ data: "json, name=plugins", elemType: shared.Plugin })
  plugins: shared.Plugin[];

  @Metadata({ data: "json, name=serviceExecutionRoleArn" })
  serviceExecutionRoleArn: string;

  @Metadata({ data: "json, name=workerConfiguration" })
  workerConfiguration?: CreateConnectorRequestBodyWorkerConfiguration;
}


export class CreateConnectorRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConnectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateConnectorRequestBody;
}


export class CreateConnectorResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConnectorResponse?: shared.CreateConnectorResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
