import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
import { FunctionResponseTypeEnum } from "./functionresponsetypeenum";
import { SelfManagedEventSource } from "./selfmanagedeventsource";
import { SourceAccessConfiguration } from "./sourceaccessconfiguration";
import { EventSourcePositionEnum } from "./eventsourcepositionenum";



// EventSourceMappingConfiguration
/** 
 * A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
**/
export class EventSourceMappingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=BisectBatchOnFunctionError" })
  bisectBatchOnFunctionError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: DestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionResponseTypes" })
  functionResponseTypes?: FunctionResponseTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastProcessingResult" })
  lastProcessingResult?: string;

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
  selfManagedEventSource?: SelfManagedEventSource;

  @SpeakeasyMetadata({ data: "json, name=SourceAccessConfigurations", elemType: SourceAccessConfiguration })
  sourceAccessConfigurations?: SourceAccessConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=StartingPosition" })
  startingPosition?: EventSourcePositionEnum;

  @SpeakeasyMetadata({ data: "json, name=StartingPositionTimestamp" })
  startingPositionTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=StateTransitionReason" })
  stateTransitionReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Topics" })
  topics?: string[];

  @SpeakeasyMetadata({ data: "json, name=TumblingWindowInSeconds" })
  tumblingWindowInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=UUID" })
  uuid?: string;
}
