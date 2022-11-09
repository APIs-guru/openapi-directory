import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CalloutStatusRow } from "./calloutstatusrow";


// ListBidResponseErrorsResponse
/** 
 * Response message for listing all reasons that bid responses resulted in an error.
**/
export class ListBidResponseErrorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=calloutStatusRows", elemType: shared.CalloutStatusRow })
  calloutStatusRows?: CalloutStatusRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
