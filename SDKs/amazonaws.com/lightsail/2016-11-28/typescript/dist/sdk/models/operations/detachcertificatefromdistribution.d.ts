import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachCertificateFromDistributionXAmzTargetEnum {
    Lightsail20161128DetachCertificateFromDistribution = "Lightsail_20161128.DetachCertificateFromDistribution"
}
export declare class DetachCertificateFromDistributionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachCertificateFromDistributionXAmzTargetEnum;
}
export declare class DetachCertificateFromDistributionRequest extends SpeakeasyBase {
    headers: DetachCertificateFromDistributionHeaders;
    request: shared.DetachCertificateFromDistributionRequest;
}
export declare class DetachCertificateFromDistributionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detachCertificateFromDistributionResult?: shared.DetachCertificateFromDistributionResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
