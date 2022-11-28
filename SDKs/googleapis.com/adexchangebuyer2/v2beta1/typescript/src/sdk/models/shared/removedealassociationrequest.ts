import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeDealAssociation } from "./creativedealassociation";



// RemoveDealAssociationRequest
/** 
 * A request for removing the association between a deal and a creative.
**/
export class RemoveDealAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=association" })
  association?: CreativeDealAssociation;
}
