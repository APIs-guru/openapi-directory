import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSslCertificateRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSslCertificateRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSslCertificateRequestPathParams;
}


export class GetSslCertificateRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  sslCertificateRequestDetail?: shared.SslCertificateRequestDetail;

  @Metadata()
  statusCode: number;
}
