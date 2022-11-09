import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CancelWorldGenerationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelWorldGenerationJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class CancelWorldGenerationJobRequest extends SpeakeasyBase {
    headers: CancelWorldGenerationJobHeaders;
    request: CancelWorldGenerationJobRequestBody;
}
export declare class CancelWorldGenerationJobResponse extends SpeakeasyBase {
    cancelWorldGenerationJobResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
