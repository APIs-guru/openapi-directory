import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWorkloadSharePathParams extends SpeakeasyBase {
    shareId: string;
    workloadId: string;
}
export declare class DeleteWorkloadShareQueryParams extends SpeakeasyBase {
    clientRequestToken: string;
}
export declare class DeleteWorkloadShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteWorkloadShareRequest extends SpeakeasyBase {
    pathParams: DeleteWorkloadSharePathParams;
    queryParams: DeleteWorkloadShareQueryParams;
    headers: DeleteWorkloadShareHeaders;
}
export declare class DeleteWorkloadShareResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
