import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSslCertificateRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetSslCertificateRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSslCertificateRequestsQueryParams;
}


export class GetSslCertificateRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.SslCertificateRequest })
  sslCertificateRequests?: shared.SslCertificateRequest[];

  @Metadata()
  statusCode: number;
}
