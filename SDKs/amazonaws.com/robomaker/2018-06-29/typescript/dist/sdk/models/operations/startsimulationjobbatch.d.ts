import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartSimulationJobBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about the batch policy.
**/
export declare class StartSimulationJobBatchRequestBodyBatchPolicy extends SpeakeasyBase {
    maxConcurrency?: number;
    timeoutInSeconds?: number;
}
export declare class StartSimulationJobBatchRequestBody extends SpeakeasyBase {
    batchPolicy?: StartSimulationJobBatchRequestBodyBatchPolicy;
    clientRequestToken?: string;
    createSimulationJobRequests: shared.SimulationJobRequest[];
    tags?: Map<string, string>;
}
export declare class StartSimulationJobBatchRequest extends SpeakeasyBase {
    headers: StartSimulationJobBatchHeaders;
    request: StartSimulationJobBatchRequestBody;
}
export declare class StartSimulationJobBatchResponse extends SpeakeasyBase {
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    startSimulationJobBatchResponse?: shared.StartSimulationJobBatchResponse;
    statusCode: number;
    throttlingException?: any;
}
