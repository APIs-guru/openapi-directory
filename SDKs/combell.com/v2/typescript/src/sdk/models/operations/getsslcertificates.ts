import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSslCertificatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetSslCertificatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSslCertificatesQueryParams;
}


export class GetSslCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.SslCertificate })
  sslCertificates?: shared.SslCertificate[];

  @Metadata()
  statusCode: number;
}
