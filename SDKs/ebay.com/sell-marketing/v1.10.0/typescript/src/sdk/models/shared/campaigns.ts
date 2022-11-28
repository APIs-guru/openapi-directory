import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";



// Campaigns
/** 
 * This type contains a list of campaigns.
**/
export class Campaigns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaigns", elemType: Campaign })
  campaigns?: Campaign[];
}
