import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeDealAssociation } from "./creativedealassociation";


// ListDealAssociationsResponse
/** 
 * A response for listing creative and deal associations
**/
export class ListDealAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=associations", elemType: shared.CreativeDealAssociation })
  associations?: CreativeDealAssociation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
