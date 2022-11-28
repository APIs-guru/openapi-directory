import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
import { FunctionResponseTypeEnum } from "./functionresponsetypeenum";
import { SelfManagedEventSource } from "./selfmanagedeventsource";
import { SourceAccessConfiguration } from "./sourceaccessconfiguration";
import { EventSourcePositionEnum } from "./eventsourcepositionenum";
/**
 * A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
**/
export declare class EventSourceMappingConfiguration extends SpeakeasyBase {
    batchSize?: number;
    bisectBatchOnFunctionError?: boolean;
    destinationConfig?: DestinationConfig;
    eventSourceArn?: string;
    functionArn?: string;
    functionResponseTypes?: FunctionResponseTypeEnum[];
    lastModified?: Date;
    lastProcessingResult?: string;
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    parallelizationFactor?: number;
    queues?: string[];
    selfManagedEventSource?: SelfManagedEventSource;
    sourceAccessConfigurations?: SourceAccessConfiguration[];
    startingPosition?: EventSourcePositionEnum;
    startingPositionTimestamp?: Date;
    state?: string;
    stateTransitionReason?: string;
    topics?: string[];
    tumblingWindowInSeconds?: number;
    uuid?: string;
}
