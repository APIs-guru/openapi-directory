import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverDeleteResolverQueryLogConfig = "Route53Resolver.DeleteResolverQueryLogConfig"
}
export declare class DeleteResolverQueryLogConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResolverQueryLogConfigXAmzTargetEnum;
}
export declare class DeleteResolverQueryLogConfigRequest extends SpeakeasyBase {
    headers: DeleteResolverQueryLogConfigHeaders;
    request: shared.DeleteResolverQueryLogConfigRequest;
}
export declare class DeleteResolverQueryLogConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteResolverQueryLogConfigResponse?: shared.DeleteResolverQueryLogConfigResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
