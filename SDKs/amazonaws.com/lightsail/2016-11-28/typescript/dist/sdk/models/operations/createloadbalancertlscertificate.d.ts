import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128CreateLoadBalancerTlsCertificate = "Lightsail_20161128.CreateLoadBalancerTlsCertificate"
}
export declare class CreateLoadBalancerTlsCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLoadBalancerTlsCertificateXAmzTargetEnum;
}
export declare class CreateLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    headers: CreateLoadBalancerTlsCertificateHeaders;
    request: shared.CreateLoadBalancerTlsCertificateRequest;
}
export declare class CreateLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createLoadBalancerTlsCertificateResult?: shared.CreateLoadBalancerTlsCertificateResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
