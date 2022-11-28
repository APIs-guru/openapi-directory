import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResolverQueryLogConfigPolicyXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfigPolicy = "Route53Resolver.GetResolverQueryLogConfigPolicy"
}
export declare class GetResolverQueryLogConfigPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverQueryLogConfigPolicyXAmzTargetEnum;
}
export declare class GetResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
    headers: GetResolverQueryLogConfigPolicyHeaders;
    request: shared.GetResolverQueryLogConfigPolicyRequest;
}
export declare class GetResolverQueryLogConfigPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResolverQueryLogConfigPolicyResponse?: shared.GetResolverQueryLogConfigPolicyResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
