import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateResolverDnssecConfigXAmzTargetEnum {
    Route53ResolverUpdateResolverDnssecConfig = "Route53Resolver.UpdateResolverDnssecConfig"
}
export declare class UpdateResolverDnssecConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResolverDnssecConfigXAmzTargetEnum;
}
export declare class UpdateResolverDnssecConfigRequest extends SpeakeasyBase {
    headers: UpdateResolverDnssecConfigHeaders;
    request: shared.UpdateResolverDnssecConfigRequest;
}
export declare class UpdateResolverDnssecConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateResolverDnssecConfigResponse?: shared.UpdateResolverDnssecConfigResponse;
}
