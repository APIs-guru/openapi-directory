import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";



// ListDealsResponse
/** 
 * Response message for listing deals in a proposal.
**/
export class ListDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: Deal })
  deals?: Deal[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
