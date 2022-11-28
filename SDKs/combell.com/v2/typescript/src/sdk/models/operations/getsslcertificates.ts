import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSslCertificatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetSslCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSslCertificatesQueryParams;
}


export class GetSslCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.SslCertificate })
  sslCertificates?: shared.SslCertificate[];

  @SpeakeasyMetadata()
  statusCode: number;
}
