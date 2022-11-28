import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadCertificatePathParams extends SpeakeasyBase {
    sha1Fingerprint: string;
}
export declare class DownloadCertificateQueryParams extends SpeakeasyBase {
    fileFormat: shared.SslCertificateFileFormatEnum;
    password: string;
    sha1Fingerprint: string;
}
export declare class DownloadCertificateRequest extends SpeakeasyBase {
    pathParams: DownloadCertificatePathParams;
    queryParams: DownloadCertificateQueryParams;
}
export declare class DownloadCertificateResponse extends SpeakeasyBase {
    contentType: string;
    downloadCertificate200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
