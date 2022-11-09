import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CancelSimulationJobBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelSimulationJobBatchRequestBody extends SpeakeasyBase {
    batch: string;
}
export declare class CancelSimulationJobBatchRequest extends SpeakeasyBase {
    headers: CancelSimulationJobBatchHeaders;
    request: CancelSimulationJobBatchRequestBody;
}
export declare class CancelSimulationJobBatchResponse extends SpeakeasyBase {
    cancelSimulationJobBatchResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
