import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=BisectBatchOnFunctionError" })
  bisectBatchOnFunctionError?: boolean;

  @Metadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: DestinationConfig;

  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @Metadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=FunctionResponseTypes" })
  functionResponseTypes?: FunctionResponseTypeEnum[];

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=LastProcessingResult" })
  lastProcessingResult?: string;

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
  selfManagedEventSource?: SelfManagedEventSource;

  @Metadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration })
  sourceAccessConfigurations?: SourceAccessConfiguration[];

  @Metadata({ data: "json, name=StartingPosition" })
  startingPosition?: EventSourcePositionEnum;

  @Metadata({ data: "json, name=StartingPositionTimestamp" })
  startingPositionTimestamp?: Date;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=StateTransitionReason" })
  stateTransitionReason?: string;

  @Metadata({ data: "json, name=Topics" })
  topics?: string[];

  @Metadata({ data: "json, name=TumblingWindowInSeconds" })
  tumblingWindowInSeconds?: number;

  @Metadata({ data: "json, name=UUID" })
  uuid?: string;
}
