import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAccessPolicyPathParams extends SpeakeasyBase {
    accessPolicyId: string;
}
export declare class DeleteAccessPolicyQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteAccessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAccessPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteAccessPolicyPathParams;
    queryParams: DeleteAccessPolicyQueryParams;
    headers: DeleteAccessPolicyHeaders;
}
export declare class DeleteAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteAccessPolicyResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
