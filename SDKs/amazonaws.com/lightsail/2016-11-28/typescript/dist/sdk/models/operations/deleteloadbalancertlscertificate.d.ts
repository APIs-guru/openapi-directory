import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLoadBalancerTlsCertificateXAmzTargetEnum {
    Lightsail20161128DeleteLoadBalancerTlsCertificate = "Lightsail_20161128.DeleteLoadBalancerTlsCertificate"
}
export declare class DeleteLoadBalancerTlsCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLoadBalancerTlsCertificateXAmzTargetEnum;
}
export declare class DeleteLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    headers: DeleteLoadBalancerTlsCertificateHeaders;
    request: shared.DeleteLoadBalancerTlsCertificateRequest;
}
export declare class DeleteLoadBalancerTlsCertificateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteLoadBalancerTlsCertificateResult?: shared.DeleteLoadBalancerTlsCertificateResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
