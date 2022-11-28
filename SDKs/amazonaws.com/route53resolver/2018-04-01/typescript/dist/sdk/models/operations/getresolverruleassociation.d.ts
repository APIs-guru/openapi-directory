import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResolverRuleAssociationXAmzTargetEnum {
    Route53ResolverGetResolverRuleAssociation = "Route53Resolver.GetResolverRuleAssociation"
}
export declare class GetResolverRuleAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverRuleAssociationXAmzTargetEnum;
}
export declare class GetResolverRuleAssociationRequest extends SpeakeasyBase {
    headers: GetResolverRuleAssociationHeaders;
    request: shared.GetResolverRuleAssociationRequest;
}
export declare class GetResolverRuleAssociationResponse extends SpeakeasyBase {
    contentType: string;
    getResolverRuleAssociationResponse?: shared.GetResolverRuleAssociationResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
