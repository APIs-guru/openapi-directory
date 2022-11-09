import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreativeDealAssociation } from "./creativedealassociation";


// AddDealAssociationRequest
/** 
 * A request for associating a deal and a creative.
**/
export class AddDealAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=association" })
  association?: CreativeDealAssociation;
}
