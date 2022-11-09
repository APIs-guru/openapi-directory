import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Campaign } from "./campaign";


// Campaigns
/** 
 * This type contains a list of campaigns.
**/
export class Campaigns extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaigns", elemType: shared.Campaign })
  campaigns?: Campaign[];
}
