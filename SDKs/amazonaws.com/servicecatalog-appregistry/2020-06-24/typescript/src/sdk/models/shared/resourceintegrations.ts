import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceGroup } from "./resourcegroup";


// ResourceIntegrations
/** 
 * The service integration information about the resource.
**/
export class ResourceIntegrations extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceGroup" })
  resourceGroup?: ResourceGroup;
}
