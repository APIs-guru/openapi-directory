import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJobRequestBody extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    headers: DeleteJobHeaders;
    request: DeleteJobRequestBody;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteJobResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
}
