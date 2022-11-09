import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverCreateResolverQueryLogConfig = "Route53Resolver.CreateResolverQueryLogConfig"
}
export declare class CreateResolverQueryLogConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResolverQueryLogConfigXAmzTargetEnum;
}
export declare class CreateResolverQueryLogConfigRequest extends SpeakeasyBase {
    headers: CreateResolverQueryLogConfigHeaders;
    request: shared.CreateResolverQueryLogConfigRequest;
}
export declare class CreateResolverQueryLogConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createResolverQueryLogConfigResponse?: shared.CreateResolverQueryLogConfigResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
