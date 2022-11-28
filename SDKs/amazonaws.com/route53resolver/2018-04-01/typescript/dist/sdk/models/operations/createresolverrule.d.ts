import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateResolverRuleXAmzTargetEnum {
    Route53ResolverCreateResolverRule = "Route53Resolver.CreateResolverRule"
}
export declare class CreateResolverRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResolverRuleXAmzTargetEnum;
}
export declare class CreateResolverRuleRequest extends SpeakeasyBase {
    headers: CreateResolverRuleHeaders;
    request: shared.CreateResolverRuleRequest;
}
export declare class CreateResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    createResolverRuleResponse?: shared.CreateResolverRuleResponse;
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
