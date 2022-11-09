import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifySslCertificateRequestDomainValidationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VerifySslCertificateRequestDomainValidationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifySslCertificateRequestDomainValidationsPathParams;
}


export class VerifySslCertificateRequestDomainValidationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
