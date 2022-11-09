import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deal } from "./deal";


// ListDealsResponse
/** 
 * Response message for listing deals in a proposal.
**/
export class ListDealsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deals", elemType: shared.Deal })
  deals?: Deal[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
