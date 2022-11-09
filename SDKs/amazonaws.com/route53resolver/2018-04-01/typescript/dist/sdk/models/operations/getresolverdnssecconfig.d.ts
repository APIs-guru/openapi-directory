import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetResolverDnssecConfigXAmzTargetEnum {
    Route53ResolverGetResolverDnssecConfig = "Route53Resolver.GetResolverDnssecConfig"
}
export declare class GetResolverDnssecConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverDnssecConfigXAmzTargetEnum;
}
export declare class GetResolverDnssecConfigRequest extends SpeakeasyBase {
    headers: GetResolverDnssecConfigHeaders;
    request: shared.GetResolverDnssecConfigRequest;
}
export declare class GetResolverDnssecConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResolverDnssecConfigResponse?: shared.GetResolverDnssecConfigResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
