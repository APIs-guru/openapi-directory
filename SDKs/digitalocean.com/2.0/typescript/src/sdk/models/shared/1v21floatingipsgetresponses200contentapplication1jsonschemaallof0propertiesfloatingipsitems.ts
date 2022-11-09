import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems } from "./1v21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitems";


export class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=features" })
  features: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sizes" })
  sizes: any;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}


export class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet" })
  droplet?: any;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=region" })
  region?: Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion;
}
