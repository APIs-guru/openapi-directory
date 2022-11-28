import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStudioMemberPathParams extends SpeakeasyBase {
    principalId: string;
    studioId: string;
}
export declare class DeleteStudioMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStudioMemberRequest extends SpeakeasyBase {
    pathParams: DeleteStudioMemberPathParams;
    headers: DeleteStudioMemberHeaders;
}
export declare class DeleteStudioMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteStudioMemberResponse?: Map<string, any>;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
