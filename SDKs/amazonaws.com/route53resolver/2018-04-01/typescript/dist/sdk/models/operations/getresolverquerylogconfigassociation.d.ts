import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResolverQueryLogConfigAssociationXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfigAssociation = "Route53Resolver.GetResolverQueryLogConfigAssociation"
}
export declare class GetResolverQueryLogConfigAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverQueryLogConfigAssociationXAmzTargetEnum;
}
export declare class GetResolverQueryLogConfigAssociationRequest extends SpeakeasyBase {
    headers: GetResolverQueryLogConfigAssociationHeaders;
    request: shared.GetResolverQueryLogConfigAssociationRequest;
}
export declare class GetResolverQueryLogConfigAssociationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResolverQueryLogConfigAssociationResponse?: shared.GetResolverQueryLogConfigAssociationResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
