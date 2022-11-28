import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverAssociateResolverQueryLogConfig = "Route53Resolver.AssociateResolverQueryLogConfig"
}
export declare class AssociateResolverQueryLogConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateResolverQueryLogConfigXAmzTargetEnum;
}
export declare class AssociateResolverQueryLogConfigRequest extends SpeakeasyBase {
    headers: AssociateResolverQueryLogConfigHeaders;
    request: shared.AssociateResolverQueryLogConfigRequest;
}
export declare class AssociateResolverQueryLogConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateResolverQueryLogConfigResponse?: shared.AssociateResolverQueryLogConfigResponse;
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
