import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResolverRuleXAmzTargetEnum {
    Route53ResolverDeleteResolverRule = "Route53Resolver.DeleteResolverRule"
}
export declare class DeleteResolverRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResolverRuleXAmzTargetEnum;
}
export declare class DeleteResolverRuleRequest extends SpeakeasyBase {
    headers: DeleteResolverRuleHeaders;
    request: shared.DeleteResolverRuleRequest;
}
export declare class DeleteResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteResolverRuleResponse?: shared.DeleteResolverRuleResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
