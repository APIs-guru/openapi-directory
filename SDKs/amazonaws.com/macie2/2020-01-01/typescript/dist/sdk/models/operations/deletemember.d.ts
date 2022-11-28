import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMemberPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMemberRequest extends SpeakeasyBase {
    pathParams: DeleteMemberPathParams;
    headers: DeleteMemberHeaders;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteMemberResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
