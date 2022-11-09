import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateLensesPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class DisassociateLensesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateLensesRequestBody extends SpeakeasyBase {
    lensAliases: string[];
}
export declare class DisassociateLensesRequest extends SpeakeasyBase {
    pathParams: DisassociateLensesPathParams;
    headers: DisassociateLensesHeaders;
    request: DisassociateLensesRequestBody;
}
export declare class DisassociateLensesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
