import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResolverRuleXAmzTargetEnum {
    Route53ResolverGetResolverRule = "Route53Resolver.GetResolverRule"
}
export declare class GetResolverRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverRuleXAmzTargetEnum;
}
export declare class GetResolverRuleRequest extends SpeakeasyBase {
    headers: GetResolverRuleHeaders;
    request: shared.GetResolverRuleRequest;
}
export declare class GetResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    getResolverRuleResponse?: shared.GetResolverRuleResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
