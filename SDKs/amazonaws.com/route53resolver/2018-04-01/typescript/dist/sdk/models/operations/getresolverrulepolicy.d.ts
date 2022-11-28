import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResolverRulePolicyXAmzTargetEnum {
    Route53ResolverGetResolverRulePolicy = "Route53Resolver.GetResolverRulePolicy"
}
export declare class GetResolverRulePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverRulePolicyXAmzTargetEnum;
}
export declare class GetResolverRulePolicyRequest extends SpeakeasyBase {
    headers: GetResolverRulePolicyHeaders;
    request: shared.GetResolverRulePolicyRequest;
}
export declare class GetResolverRulePolicyResponse extends SpeakeasyBase {
    contentType: string;
    getResolverRulePolicyResponse?: shared.GetResolverRulePolicyResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
