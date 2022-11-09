import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEventSourceMappingHeaders extends SpeakeasyBase {
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


// CreateEventSourceMappingRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class CreateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @Metadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


// CreateEventSourceMappingRequestBodySelfManagedEventSource
/** 
 * The self-managed Apache Kafka cluster for your event source.
**/
export class CreateEventSourceMappingRequestBodySelfManagedEventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoints" })
  endpoints?: Map<string, string[]>;
}

export enum CreateEventSourceMappingRequestBodyStartingPositionEnum {
    TrimHorizon = "TRIM_HORIZON"
,    Latest = "LATEST"
,    AtTimestamp = "AT_TIMESTAMP"
}


export class CreateEventSourceMappingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=BisectBatchOnFunctionError" })
  bisectBatchOnFunctionError?: boolean;

  @Metadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: CreateEventSourceMappingRequestBodyDestinationConfig;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName: string;

  @Metadata({ data: "json, name=FunctionResponseTypes" })
  functionResponseTypes?: shared.FunctionResponseTypeEnum[];

  @Metadata({ data: "json, name=MaximumBatchingWindowInSeconds" })
  maximumBatchingWindowInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRecordAgeInSeconds" })
  maximumRecordAgeInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;

  @Metadata({ data: "json, name=ParallelizationFactor" })
  parallelizationFactor?: number;

  @Metadata({ data: "json, name=Queues" })
  queues?: string[];

  @Metadata({ data: "json, name=SelfManagedEventSource" })
  selfManagedEventSource?: CreateEventSourceMappingRequestBodySelfManagedEventSource;

  @Metadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration })
  sourceAccessConfigurations?: shared.SourceAccessConfiguration[];

  @Metadata({ data: "json, name=StartingPosition" })
  startingPosition?: CreateEventSourceMappingRequestBodyStartingPositionEnum;

  @Metadata({ data: "json, name=StartingPositionTimestamp" })
  startingPositionTimestamp?: Date;

  @Metadata({ data: "json, name=Topics" })
  topics?: string[];

  @Metadata({ data: "json, name=TumblingWindowInSeconds" })
  tumblingWindowInSeconds?: number;
}


export class CreateEventSourceMappingRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEventSourceMappingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEventSourceMappingRequestBody;
}


export class CreateEventSourceMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
