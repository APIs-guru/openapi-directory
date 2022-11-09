import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCertificateDataInXmlFormatFromUriIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class GetCertificateDataInXmlFormatFromUriIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCertificateDataInXmlFormatFromUriIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCertificateDataInXmlFormatFromUriIdPathParams;

  @Metadata()
  security: GetCertificateDataInXmlFormatFromUriIdSecurity;
}


export class GetCertificateDataInXmlFormatFromUriId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetCertificateDataInXmlFormatFromUriId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetCertificateDataInXmlFormatFromUriId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetCertificateDataInXmlFormatFromUriIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getCertificateDataInXmlFormatFromUriId400ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId400ApplicationJson;

  @Metadata()
  getCertificateDataInXmlFormatFromUriId401ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId401ApplicationJson;

  @Metadata()
  getCertificateDataInXmlFormatFromUriId404ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId404ApplicationJson;

  @Metadata()
  getCertificateDataInXmlFormatFromUriId500ApplicationJsonOneOf?: any;

  @Metadata()
  getCertificateDataInXmlFormatFromUriId503ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
