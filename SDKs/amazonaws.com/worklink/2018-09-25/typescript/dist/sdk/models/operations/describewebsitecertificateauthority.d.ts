import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWebsiteCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
    fleetArn: string;
    websiteCaId: string;
}
export declare class DescribeWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
    headers: DescribeWebsiteCertificateAuthorityHeaders;
    request: DescribeWebsiteCertificateAuthorityRequestBody;
}
export declare class DescribeWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    describeWebsiteCertificateAuthorityResponse?: shared.DescribeWebsiteCertificateAuthorityResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
