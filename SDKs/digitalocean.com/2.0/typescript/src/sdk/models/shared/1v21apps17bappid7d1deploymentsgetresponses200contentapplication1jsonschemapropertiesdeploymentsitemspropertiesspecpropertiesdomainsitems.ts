import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Default = "DEFAULT"
,    Primary = "PRIMARY"
,    Alias = "ALIAS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum;

  @Metadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
