import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateWebsiteCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
    fleetArn: string;
    websiteCaId: string;
}
export declare class DisassociateWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
    headers: DisassociateWebsiteCertificateAuthorityHeaders;
    request: DisassociateWebsiteCertificateAuthorityRequestBody;
}
export declare class DisassociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    disassociateWebsiteCertificateAuthorityResponse?: Map<string, any>;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
