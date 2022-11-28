import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWorkloadPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class DeleteWorkloadQueryParams extends SpeakeasyBase {
    clientRequestToken: string;
}
export declare class DeleteWorkloadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteWorkloadRequest extends SpeakeasyBase {
    pathParams: DeleteWorkloadPathParams;
    queryParams: DeleteWorkloadQueryParams;
    headers: DeleteWorkloadHeaders;
}
export declare class DeleteWorkloadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
