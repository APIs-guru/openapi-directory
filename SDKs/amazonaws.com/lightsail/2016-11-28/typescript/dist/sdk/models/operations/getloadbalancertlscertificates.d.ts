import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLoadBalancerTlsCertificatesXAmzTargetEnum {
    Lightsail20161128GetLoadBalancerTlsCertificates = "Lightsail_20161128.GetLoadBalancerTlsCertificates"
}
export declare class GetLoadBalancerTlsCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancerTlsCertificatesXAmzTargetEnum;
}
export declare class GetLoadBalancerTlsCertificatesRequest extends SpeakeasyBase {
    headers: GetLoadBalancerTlsCertificatesHeaders;
    request: shared.GetLoadBalancerTlsCertificatesRequest;
}
export declare class GetLoadBalancerTlsCertificatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getLoadBalancerTlsCertificatesResult?: shared.GetLoadBalancerTlsCertificatesResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
