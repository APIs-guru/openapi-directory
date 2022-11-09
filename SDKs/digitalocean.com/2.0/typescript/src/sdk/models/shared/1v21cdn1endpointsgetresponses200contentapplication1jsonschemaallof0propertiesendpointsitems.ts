import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=origin" })
  origin: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}
