import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSslCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" })
  sha1Fingerprint: string;
}


export class GetSslCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha1_fingerprint" })
  sha1Fingerprint: string;
}


export class GetSslCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSslCertificatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSslCertificateQueryParams;
}


export class GetSslCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sslCertificateDetail?: shared.SslCertificateDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
