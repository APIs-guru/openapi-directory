import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" })
  sha1Fingerprint: string;
}


export class DownloadCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=file_format" })
  fileFormat: shared.SslCertificateFileFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sha1_fingerprint" })
  sha1Fingerprint: string;
}


export class DownloadCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadCertificatePathParams;

  @Metadata()
  queryParams: DownloadCertificateQueryParams;
}


export class DownloadCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadCertificate200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
