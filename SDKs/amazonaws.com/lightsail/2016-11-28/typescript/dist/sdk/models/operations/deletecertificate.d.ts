import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCertificateXAmzTargetEnum {
    Lightsail20161128DeleteCertificate = "Lightsail_20161128.DeleteCertificate"
}
export declare class DeleteCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateXAmzTargetEnum;
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    headers: DeleteCertificateHeaders;
    request: shared.DeleteCertificateRequest;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteCertificateResult?: shared.DeleteCertificateResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
