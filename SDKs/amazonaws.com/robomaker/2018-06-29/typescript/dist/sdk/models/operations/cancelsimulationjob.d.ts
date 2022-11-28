import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelSimulationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelSimulationJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class CancelSimulationJobRequest extends SpeakeasyBase {
    headers: CancelSimulationJobHeaders;
    request: CancelSimulationJobRequestBody;
}
export declare class CancelSimulationJobResponse extends SpeakeasyBase {
    cancelSimulationJobResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
