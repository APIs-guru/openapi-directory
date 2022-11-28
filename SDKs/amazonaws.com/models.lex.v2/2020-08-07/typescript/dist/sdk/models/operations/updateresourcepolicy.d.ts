import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateResourcePolicyPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class UpdateResourcePolicyQueryParams extends SpeakeasyBase {
    expectedRevisionId?: string;
}
export declare class UpdateResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResourcePolicyRequestBody extends SpeakeasyBase {
    policy: string;
}
export declare class UpdateResourcePolicyRequest extends SpeakeasyBase {
    pathParams: UpdateResourcePolicyPathParams;
    queryParams: UpdateResourcePolicyQueryParams;
    headers: UpdateResourcePolicyHeaders;
    request: UpdateResourcePolicyRequestBody;
}
export declare class UpdateResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateResourcePolicyResponse?: shared.UpdateResourcePolicyResponse;
    validationException?: any;
}
