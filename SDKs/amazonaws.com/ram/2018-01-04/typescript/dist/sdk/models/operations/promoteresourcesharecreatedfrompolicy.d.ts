import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PromoteResourceShareCreatedFromPolicyQueryParams extends SpeakeasyBase {
    resourceShareArn: string;
}
export declare class PromoteResourceShareCreatedFromPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PromoteResourceShareCreatedFromPolicyRequest extends SpeakeasyBase {
    queryParams: PromoteResourceShareCreatedFromPolicyQueryParams;
    headers: PromoteResourceShareCreatedFromPolicyHeaders;
}
export declare class PromoteResourceShareCreatedFromPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    malformedArnException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    promoteResourceShareCreatedFromPolicyResponse?: shared.PromoteResourceShareCreatedFromPolicyResponse;
    resourceShareLimitExceededException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
