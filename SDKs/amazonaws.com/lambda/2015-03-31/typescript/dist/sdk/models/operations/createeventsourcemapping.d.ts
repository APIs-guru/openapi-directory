import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEventSourceMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export declare class CreateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
/**
 * The self-managed Apache Kafka cluster for your event source.
**/
export declare class CreateEventSourceMappingRequestBodySelfManagedEventSource extends SpeakeasyBase {
    endpoints?: Map<string, string[]>;
}
export declare enum CreateEventSourceMappingRequestBodyStartingPositionEnum {
    TrimHorizon = "TRIM_HORIZON",
    Latest = "LATEST",
    AtTimestamp = "AT_TIMESTAMP"
}
export declare class CreateEventSourceMappingRequestBody extends SpeakeasyBase {
    batchSize?: number;
    bisectBatchOnFunctionError?: boolean;
    destinationConfig?: CreateEventSourceMappingRequestBodyDestinationConfig;
    enabled?: boolean;
    eventSourceArn?: string;
    functionName: string;
    functionResponseTypes?: shared.FunctionResponseTypeEnum[];
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    parallelizationFactor?: number;
    queues?: string[];
    selfManagedEventSource?: CreateEventSourceMappingRequestBodySelfManagedEventSource;
    sourceAccessConfigurations?: shared.SourceAccessConfiguration[];
    startingPosition?: CreateEventSourceMappingRequestBodyStartingPositionEnum;
    startingPositionTimestamp?: Date;
    topics?: string[];
    tumblingWindowInSeconds?: number;
}
export declare class CreateEventSourceMappingRequest extends SpeakeasyBase {
    headers: CreateEventSourceMappingHeaders;
    request: CreateEventSourceMappingRequestBody;
}
export declare class CreateEventSourceMappingResponse extends SpeakeasyBase {
    contentType: string;
    eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
