import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResourcePolicyStatementPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class CreateResourcePolicyStatementQueryParams extends SpeakeasyBase {
    expectedRevisionId?: string;
}
export declare class CreateResourcePolicyStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateResourcePolicyStatementRequestBodyEffectEnum {
    Allow = "Allow",
    Deny = "Deny"
}
export declare class CreateResourcePolicyStatementRequestBody extends SpeakeasyBase {
    action: string[];
    condition?: Map<string, Map<string, string>>;
    effect: CreateResourcePolicyStatementRequestBodyEffectEnum;
    principal: shared.Principal[];
    statementId: string;
}
export declare class CreateResourcePolicyStatementRequest extends SpeakeasyBase {
    pathParams: CreateResourcePolicyStatementPathParams;
    queryParams: CreateResourcePolicyStatementQueryParams;
    headers: CreateResourcePolicyStatementHeaders;
    request: CreateResourcePolicyStatementRequestBody;
}
export declare class CreateResourcePolicyStatementResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createResourcePolicyStatementResponse?: shared.CreateResourcePolicyStatementResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
