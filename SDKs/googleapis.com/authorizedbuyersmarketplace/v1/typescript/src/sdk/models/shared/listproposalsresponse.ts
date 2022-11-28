import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";



// ListProposalsResponse
/** 
 * Response message for listing proposals.
**/
export class ListProposalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=proposals", elemType: Proposal })
  proposals?: Proposal[];
}
