import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCertificateXAmzTargetEnum {
    Lightsail20161128CreateCertificate = "Lightsail_20161128.CreateCertificate"
}
export declare class CreateCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCertificateXAmzTargetEnum;
}
export declare class CreateCertificateRequest extends SpeakeasyBase {
    headers: CreateCertificateHeaders;
    request: shared.CreateCertificateRequest;
}
export declare class CreateCertificateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createCertificateResult?: shared.CreateCertificateResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
