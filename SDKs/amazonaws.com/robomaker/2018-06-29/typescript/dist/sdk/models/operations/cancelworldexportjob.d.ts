import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CancelWorldExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelWorldExportJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class CancelWorldExportJobRequest extends SpeakeasyBase {
    headers: CancelWorldExportJobHeaders;
    request: CancelWorldExportJobRequestBody;
}
export declare class CancelWorldExportJobResponse extends SpeakeasyBase {
    cancelWorldExportJobResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
