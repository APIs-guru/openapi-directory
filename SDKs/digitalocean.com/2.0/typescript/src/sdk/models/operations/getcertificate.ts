import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=certificate_id" })
  certificateId: string;
}


export class GetCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCertificatePathParams;
}


export class GetCertificate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems;
}


export class GetCertificate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCertificate200ApplicationJsonObject?: GetCertificate200ApplicationJson;

  @Metadata()
  getCertificate401ApplicationJsonObject?: GetCertificate401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
