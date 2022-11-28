import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroup } from "./resourcegroup";



// Integrations
/** 
 *  The information about the service integration.
**/
export class Integrations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGroup" })
  resourceGroup?: ResourceGroup;
}
