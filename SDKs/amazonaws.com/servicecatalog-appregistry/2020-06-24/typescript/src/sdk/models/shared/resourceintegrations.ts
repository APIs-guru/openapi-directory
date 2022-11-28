import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroup } from "./resourcegroup";



// ResourceIntegrations
/** 
 * The service integration information about the resource.
**/
export class ResourceIntegrations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGroup" })
  resourceGroup?: ResourceGroup;
}
