import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeDealAssociation } from "./creativedealassociation";



// AddDealAssociationRequest
/** 
 * A request for associating a deal and a creative.
**/
export class AddDealAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=association" })
  association?: CreativeDealAssociation;
}
