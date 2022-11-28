import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelDeploymentJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelDeploymentJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class CancelDeploymentJobRequest extends SpeakeasyBase {
    headers: CancelDeploymentJobHeaders;
    request: CancelDeploymentJobRequestBody;
}
export declare class CancelDeploymentJobResponse extends SpeakeasyBase {
    cancelDeploymentJobResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
