import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateResolverRuleXAmzTargetEnum {
    Route53ResolverUpdateResolverRule = "Route53Resolver.UpdateResolverRule"
}
export declare class UpdateResolverRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResolverRuleXAmzTargetEnum;
}
export declare class UpdateResolverRuleRequest extends SpeakeasyBase {
    headers: UpdateResolverRuleHeaders;
    request: shared.UpdateResolverRuleRequest;
}
export declare class UpdateResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateResolverRuleResponse?: shared.UpdateResolverRuleResponse;
}
