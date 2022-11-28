import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestartSimulationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RestartSimulationJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class RestartSimulationJobRequest extends SpeakeasyBase {
    headers: RestartSimulationJobHeaders;
    request: RestartSimulationJobRequestBody;
}
export declare class RestartSimulationJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    restartSimulationJobResponse?: Map<string, any>;
    statusCode: number;
    throttlingException?: any;
}
