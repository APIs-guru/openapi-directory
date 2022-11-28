import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateMemberPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisassociateMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateMemberRequest extends SpeakeasyBase {
    pathParams: DisassociateMemberPathParams;
    headers: DisassociateMemberHeaders;
}
export declare class DisassociateMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    disassociateMemberResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
