import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreativeDealAssociation } from "./creativedealassociation";


// RemoveDealAssociationRequest
/** 
 * A request for removing the association between a deal and a creative.
**/
export class RemoveDealAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=association" })
  association?: CreativeDealAssociation;
}
