import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFindingsFilterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteFindingsFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFindingsFilterRequest extends SpeakeasyBase {
    pathParams: DeleteFindingsFilterPathParams;
    headers: DeleteFindingsFilterHeaders;
}
export declare class DeleteFindingsFilterResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteFindingsFilterResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
