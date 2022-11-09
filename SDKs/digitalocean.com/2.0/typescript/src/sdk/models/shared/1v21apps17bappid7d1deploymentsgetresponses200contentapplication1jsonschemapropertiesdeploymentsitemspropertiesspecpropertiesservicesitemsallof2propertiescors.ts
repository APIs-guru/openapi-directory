import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=allow_origins", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins })
  allowOrigins?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins[];

  @Metadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=max_age" })
  maxAge?: string;
}
