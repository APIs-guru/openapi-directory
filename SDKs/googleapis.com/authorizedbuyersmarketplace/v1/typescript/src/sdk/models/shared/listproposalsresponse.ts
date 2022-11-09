import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Proposal } from "./proposal";


// ListProposalsResponse
/** 
 * Response message for listing proposals.
**/
export class ListProposalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=proposals", elemType: shared.Proposal })
  proposals?: Proposal[];
}
