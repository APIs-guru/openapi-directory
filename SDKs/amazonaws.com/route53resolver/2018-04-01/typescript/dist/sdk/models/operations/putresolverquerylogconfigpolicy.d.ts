import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResolverQueryLogConfigPolicyXAmzTargetEnum {
    Route53ResolverPutResolverQueryLogConfigPolicy = "Route53Resolver.PutResolverQueryLogConfigPolicy"
}
export declare class PutResolverQueryLogConfigPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResolverQueryLogConfigPolicyXAmzTargetEnum;
}
export declare class PutResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
    headers: PutResolverQueryLogConfigPolicyHeaders;
    request: shared.PutResolverQueryLogConfigPolicyRequest;
}
export declare class PutResolverQueryLogConfigPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidPolicyDocument?: any;
    invalidRequestException?: any;
    putResolverQueryLogConfigPolicyResponse?: shared.PutResolverQueryLogConfigPolicyResponse;
    statusCode: number;
    unknownResourceException?: any;
}
