import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateLensesPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class AssociateLensesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateLensesRequestBody extends SpeakeasyBase {
    lensAliases: string[];
}
export declare class AssociateLensesRequest extends SpeakeasyBase {
    pathParams: AssociateLensesPathParams;
    headers: AssociateLensesHeaders;
    request: AssociateLensesRequestBody;
}
export declare class AssociateLensesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
