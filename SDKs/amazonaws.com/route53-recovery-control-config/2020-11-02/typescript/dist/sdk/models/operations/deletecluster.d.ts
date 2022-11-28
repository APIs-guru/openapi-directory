import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteClusterPathParams extends SpeakeasyBase {
    clusterArn: string;
}
export declare class DeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    pathParams: DeleteClusterPathParams;
    headers: DeleteClusterHeaders;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteClusterResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
