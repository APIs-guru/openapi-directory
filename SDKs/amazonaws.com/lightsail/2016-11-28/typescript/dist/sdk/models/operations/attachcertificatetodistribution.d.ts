import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachCertificateToDistributionXAmzTargetEnum {
    Lightsail20161128AttachCertificateToDistribution = "Lightsail_20161128.AttachCertificateToDistribution"
}
export declare class AttachCertificateToDistributionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachCertificateToDistributionXAmzTargetEnum;
}
export declare class AttachCertificateToDistributionRequest extends SpeakeasyBase {
    headers: AttachCertificateToDistributionHeaders;
    request: shared.AttachCertificateToDistributionRequest;
}
export declare class AttachCertificateToDistributionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    attachCertificateToDistributionResult?: shared.AttachCertificateToDistributionResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
