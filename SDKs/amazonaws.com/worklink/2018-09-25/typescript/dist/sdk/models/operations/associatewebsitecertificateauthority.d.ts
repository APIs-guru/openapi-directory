import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssociateWebsiteCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
    certificate: string;
    displayName?: string;
    fleetArn: string;
}
export declare class AssociateWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
    headers: AssociateWebsiteCertificateAuthorityHeaders;
    request: AssociateWebsiteCertificateAuthorityRequestBody;
}
export declare class AssociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
    associateWebsiteCertificateAuthorityResponse?: shared.AssociateWebsiteCertificateAuthorityResponse;
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
