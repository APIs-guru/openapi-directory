import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEventSourceMappingHeaders extends SpeakeasyBase {
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


// CreateEventSourceMappingRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class CreateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @SpeakeasyMetadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


// CreateEventSourceMappingRequestBodySelfManagedEventSource
/** 
 * The self-managed Apache Kafka cluster for your event source.
**/
export class CreateEventSourceMappingRequestBodySelfManagedEventSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoints" })
  endpoints?: Map<string, string[]>;
}

export enum CreateEventSourceMappingRequestBodyStartingPositionEnum {
    TrimHorizon = "TRIM_HORIZON",
    Latest = "LATEST",
    AtTimestamp = "AT_TIMESTAMP"
}


export class CreateEventSourceMappingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=BisectBatchOnFunctionError" })
  bisectBatchOnFunctionError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: CreateEventSourceMappingRequestBodyDestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionResponseTypes" })
  functionResponseTypes?: shared.FunctionResponseTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MaximumBatchingWindowInSeconds" })
  maximumBatchingWindowInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRecordAgeInSeconds" })
  maximumRecordAgeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=ParallelizationFactor" })
  parallelizationFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=Queues" })
  queues?: string[];

  @SpeakeasyMetadata({ data: "json, name=SelfManagedEventSource" })
  selfManagedEventSource?: CreateEventSourceMappingRequestBodySelfManagedEventSource;

  @SpeakeasyMetadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration })
  sourceAccessConfigurations?: shared.SourceAccessConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=StartingPosition" })
  startingPosition?: CreateEventSourceMappingRequestBodyStartingPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=StartingPositionTimestamp" })
  startingPositionTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=TumblingWindowInSeconds" })
  tumblingWindowInSeconds?: number;
}


export class CreateEventSourceMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateEventSourceMappingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateEventSourceMappingRequestBody;
}


export class CreateEventSourceMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
