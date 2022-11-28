import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128AttachLoadBalancerTlsCertificate = "Lightsail_20161128.AttachLoadBalancerTlsCertificate"
}
export declare class AttachLoadBalancerTlsCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachLoadBalancerTlsCertificateXAmzTargetEnum;
}
export declare class AttachLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    headers: AttachLoadBalancerTlsCertificateHeaders;
    request: shared.AttachLoadBalancerTlsCertificateRequest;
}
export declare class AttachLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    attachLoadBalancerTlsCertificateResult?: shared.AttachLoadBalancerTlsCertificateResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
