import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSslCertificateRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSslCertificateRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSslCertificateRequestPathParams;
}


export class GetSslCertificateRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  sslCertificateRequestDetail?: shared.SslCertificateRequestDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
