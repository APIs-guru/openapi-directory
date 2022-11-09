import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceGroup } from "./resourcegroup";


// Integrations
/** 
 *  The information about the service integration.
**/
export class Integrations extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceGroup" })
  resourceGroup?: ResourceGroup;
}
