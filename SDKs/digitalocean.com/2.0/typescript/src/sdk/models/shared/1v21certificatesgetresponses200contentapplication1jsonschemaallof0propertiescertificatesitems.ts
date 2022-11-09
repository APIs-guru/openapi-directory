import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum {
    Pending = "pending"
,    Verified = "verified"
,    Error = "error"
}

export enum Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum {
    Custom = "custom"
,    LetsEncrypt = "lets_encrypt"
}


export class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=dns_names" })
  dnsNames?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=not_after" })
  notAfter?: Date;

  @Metadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @Metadata({ data: "json, name=state" })
  state?: Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum;
}
