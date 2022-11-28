import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSslCertificateRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetSslCertificateRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSslCertificateRequestsQueryParams;
}


export class GetSslCertificateRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.SslCertificateRequest })
  sslCertificateRequests?: shared.SslCertificateRequest[];

  @SpeakeasyMetadata()
  statusCode: number;
}
