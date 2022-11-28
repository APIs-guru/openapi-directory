import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalloutStatusRow } from "./calloutstatusrow";



// ListBidResponseErrorsResponse
/** 
 * Response message for listing all reasons that bid responses resulted in an error.
**/
export class ListBidResponseErrorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calloutStatusRows", elemType: CalloutStatusRow })
  calloutStatusRows?: CalloutStatusRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
