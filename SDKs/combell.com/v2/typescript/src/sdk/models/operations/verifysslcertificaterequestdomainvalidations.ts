import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifySslCertificateRequestDomainValidationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VerifySslCertificateRequestDomainValidationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VerifySslCertificateRequestDomainValidationsPathParams;
}


export class VerifySslCertificateRequestDomainValidationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
