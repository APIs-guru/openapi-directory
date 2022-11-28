import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfig = "Route53Resolver.GetResolverQueryLogConfig"
}
export declare class GetResolverQueryLogConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverQueryLogConfigXAmzTargetEnum;
}
export declare class GetResolverQueryLogConfigRequest extends SpeakeasyBase {
    headers: GetResolverQueryLogConfigHeaders;
    request: shared.GetResolverQueryLogConfigRequest;
}
export declare class GetResolverQueryLogConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResolverQueryLogConfigResponse?: shared.GetResolverQueryLogConfigResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
