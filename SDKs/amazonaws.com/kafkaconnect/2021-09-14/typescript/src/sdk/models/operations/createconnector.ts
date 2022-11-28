import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConnectorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateConnectorRequestBodyCapacity
/** 
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
**/
export class CreateConnectorRequestBodyCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScaling" })
  autoScaling?: shared.AutoScaling;

  @SpeakeasyMetadata({ data: "json, name=provisionedCapacity" })
  provisionedCapacity?: shared.ProvisionedCapacity;
}


// CreateConnectorRequestBodyKafkaCluster
/** 
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
export class CreateConnectorRequestBodyKafkaCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apacheKafkaCluster" })
  apacheKafkaCluster?: shared.ApacheKafkaCluster;
}


// CreateConnectorRequestBodyKafkaClusterClientAuthentication
/** 
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
export class CreateConnectorRequestBodyKafkaClusterClientAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType?: shared.KafkaClusterClientAuthenticationTypeEnum;
}


// CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
/** 
 * Details of encryption in transit to the Apache Kafka cluster.
**/
export class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType?: shared.KafkaClusterEncryptionInTransitTypeEnum;
}


// CreateConnectorRequestBodyLogDelivery
/** 
 * Details about log delivery.
**/
export class CreateConnectorRequestBodyLogDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerLogDelivery" })
  workerLogDelivery?: shared.WorkerLogDelivery;
}


// CreateConnectorRequestBodyWorkerConfiguration
/** 
 * The configuration of the workers, which are the processes that run the connector logic.
**/
export class CreateConnectorRequestBodyWorkerConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}


export class CreateConnectorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity: CreateConnectorRequestBodyCapacity;

  @SpeakeasyMetadata({ data: "json, name=connectorConfiguration" })
  connectorConfiguration: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=connectorDescription" })
  connectorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorName" })
  connectorName: string;

  @SpeakeasyMetadata({ data: "json, name=kafkaCluster" })
  kafkaCluster: CreateConnectorRequestBodyKafkaCluster;

  @SpeakeasyMetadata({ data: "json, name=kafkaClusterClientAuthentication" })
  kafkaClusterClientAuthentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication;

  @SpeakeasyMetadata({ data: "json, name=kafkaClusterEncryptionInTransit" })
  kafkaClusterEncryptionInTransit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;

  @SpeakeasyMetadata({ data: "json, name=kafkaConnectVersion" })
  kafkaConnectVersion: string;

  @SpeakeasyMetadata({ data: "json, name=logDelivery" })
  logDelivery?: CreateConnectorRequestBodyLogDelivery;

  @SpeakeasyMetadata({ data: "json, name=plugins", elemType: shared.Plugin })
  plugins: shared.Plugin[];

  @SpeakeasyMetadata({ data: "json, name=serviceExecutionRoleArn" })
  serviceExecutionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=workerConfiguration" })
  workerConfiguration?: CreateConnectorRequestBodyWorkerConfiguration;
}


export class CreateConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateConnectorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateConnectorRequestBody;
}


export class CreateConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createConnectorResponse?: shared.CreateConnectorResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
