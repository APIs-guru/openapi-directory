import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWebsiteCertificateAuthoritiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWebsiteCertificateAuthoritiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWebsiteCertificateAuthoritiesRequestBody extends SpeakeasyBase {
    fleetArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWebsiteCertificateAuthoritiesRequest extends SpeakeasyBase {
    queryParams: ListWebsiteCertificateAuthoritiesQueryParams;
    headers: ListWebsiteCertificateAuthoritiesHeaders;
    request: ListWebsiteCertificateAuthoritiesRequestBody;
}
export declare class ListWebsiteCertificateAuthoritiesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    listWebsiteCertificateAuthoritiesResponse?: shared.ListWebsiteCertificateAuthoritiesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
