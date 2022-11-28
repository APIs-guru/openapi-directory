import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCertificateDataInXmlFormatFromUriIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class GetCertificateDataInXmlFormatFromUriIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCertificateDataInXmlFormatFromUriId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetCertificateDataInXmlFormatFromUriId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetCertificateDataInXmlFormatFromUriId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetCertificateDataInXmlFormatFromUriIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCertificateDataInXmlFormatFromUriIdPathParams;

  @SpeakeasyMetadata()
  security: GetCertificateDataInXmlFormatFromUriIdSecurity;
}


export class GetCertificateDataInXmlFormatFromUriIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCertificateDataInXmlFormatFromUriId400ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId400ApplicationJson;

  @SpeakeasyMetadata()
  getCertificateDataInXmlFormatFromUriId401ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId401ApplicationJson;

  @SpeakeasyMetadata()
  getCertificateDataInXmlFormatFromUriId404ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId404ApplicationJson;

  @SpeakeasyMetadata()
  getCertificateDataInXmlFormatFromUriId500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  getCertificateDataInXmlFormatFromUriId503ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
