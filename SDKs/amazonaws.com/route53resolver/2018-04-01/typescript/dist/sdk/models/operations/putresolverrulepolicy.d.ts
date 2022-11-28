import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResolverRulePolicyXAmzTargetEnum {
    Route53ResolverPutResolverRulePolicy = "Route53Resolver.PutResolverRulePolicy"
}
export declare class PutResolverRulePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResolverRulePolicyXAmzTargetEnum;
}
export declare class PutResolverRulePolicyRequest extends SpeakeasyBase {
    headers: PutResolverRulePolicyHeaders;
    request: shared.PutResolverRulePolicyRequest;
}
export declare class PutResolverRulePolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidPolicyDocument?: any;
    putResolverRulePolicyResponse?: shared.PutResolverRulePolicyResponse;
    statusCode: number;
    unknownResourceException?: any;
}
