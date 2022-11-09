import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSslCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" })
  sha1Fingerprint: string;
}


export class GetSslCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sha1_fingerprint" })
  sha1Fingerprint: string;
}


export class GetSslCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSslCertificatePathParams;

  @Metadata()
  queryParams: GetSslCertificateQueryParams;
}


export class GetSslCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sslCertificateDetail?: shared.SslCertificateDetail;

  @Metadata()
  statusCode: number;
}
