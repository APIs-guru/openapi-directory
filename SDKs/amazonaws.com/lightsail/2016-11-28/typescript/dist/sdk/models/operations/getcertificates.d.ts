import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCertificatesXAmzTargetEnum {
    Lightsail20161128GetCertificates = "Lightsail_20161128.GetCertificates"
}
export declare class GetCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificatesXAmzTargetEnum;
}
export declare class GetCertificatesRequest extends SpeakeasyBase {
    headers: GetCertificatesHeaders;
    request: shared.GetCertificatesRequest;
}
export declare class GetCertificatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getCertificatesResult?: shared.GetCertificatesResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
