import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" })
  sha1Fingerprint: string;
}


export class DownloadCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_format" })
  fileFormat: shared.SslCertificateFileFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha1_fingerprint" })
  sha1Fingerprint: string;
}


export class DownloadCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadCertificatePathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadCertificateQueryParams;
}


export class DownloadCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadCertificate200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
