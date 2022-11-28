import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeDealAssociation } from "./creativedealassociation";



// ListDealAssociationsResponse
/** 
 * A response for listing creative and deal associations
**/
export class ListDealAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associations", elemType: CreativeDealAssociation })
  associations?: CreativeDealAssociation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
