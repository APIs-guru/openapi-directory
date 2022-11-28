import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEventSourceMappingPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class UpdateEventSourceMappingHeaders extends SpeakeasyBase {
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
export declare class UpdateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
export declare class UpdateEventSourceMappingRequestBody extends SpeakeasyBase {
    batchSize?: number;
    bisectBatchOnFunctionError?: boolean;
    destinationConfig?: UpdateEventSourceMappingRequestBodyDestinationConfig;
    enabled?: boolean;
    functionName?: string;
    functionResponseTypes?: shared.FunctionResponseTypeEnum[];
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    parallelizationFactor?: number;
    sourceAccessConfigurations?: shared.SourceAccessConfiguration[];
    tumblingWindowInSeconds?: number;
}
export declare class UpdateEventSourceMappingRequest extends SpeakeasyBase {
    pathParams: UpdateEventSourceMappingPathParams;
    headers: UpdateEventSourceMappingHeaders;
    request: UpdateEventSourceMappingRequestBody;
}
export declare class UpdateEventSourceMappingResponse extends SpeakeasyBase {
    contentType: string;
    eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
