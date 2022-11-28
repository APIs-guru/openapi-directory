import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSslCertificateRequestsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetSslCertificateRequestsRequest extends SpeakeasyBase {
    queryParams: GetSslCertificateRequestsQueryParams;
}
export declare class GetSslCertificateRequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    sslCertificateRequests?: shared.SslCertificateRequest[];
    statusCode: number;
}
