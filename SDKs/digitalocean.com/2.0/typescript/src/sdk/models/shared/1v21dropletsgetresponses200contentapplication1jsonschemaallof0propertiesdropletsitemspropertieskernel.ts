import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel
/** 
 * **Note**: All Droplets created after March 2017 use internal kernels by default.
 * These Droplets will have this attribute set to `null`.
 * 
 * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
 * for Droplets with externally managed kernels. This will initially be set to
 * the kernel of the base image when the Droplet is created.
 * 
**/
export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
