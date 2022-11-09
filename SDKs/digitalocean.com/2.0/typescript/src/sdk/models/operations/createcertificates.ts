import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum {
    Custom = "custom"
,    LetsEncrypt = "lets_encrypt"
}


export class CreateCertificatesRequestBodyLetSEncryptCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_names" })
  dnsNames: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type?: CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum;
}

export enum CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum {
    Custom = "custom"
,    LetsEncrypt = "lets_encrypt"
}


export class CreateCertificatesRequestBodyCustomCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_chain" })
  certificateChain?: string;

  @Metadata({ data: "json, name=leaf_certificate" })
  leafCertificate: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_key" })
  privateKey: string;

  @Metadata({ data: "json, name=type" })
  type?: CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum;
}


export class CreateCertificatesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateCertificates201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems;
}


export class CreateCertificates401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createCertificates201ApplicationJsonObject?: CreateCertificates201ApplicationJson;

  @Metadata()
  createCertificates401ApplicationJsonObject?: CreateCertificates401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
