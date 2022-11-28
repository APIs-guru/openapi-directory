import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateResolverRuleXAmzTargetEnum {
    Route53ResolverAssociateResolverRule = "Route53Resolver.AssociateResolverRule"
}
export declare class AssociateResolverRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateResolverRuleXAmzTargetEnum;
}
export declare class AssociateResolverRuleRequest extends SpeakeasyBase {
    headers: AssociateResolverRuleHeaders;
    request: shared.AssociateResolverRuleRequest;
}
export declare class AssociateResolverRuleResponse extends SpeakeasyBase {
    associateResolverRuleResponse?: shared.AssociateResolverRuleResponse;
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
