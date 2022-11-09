import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { XssMatchSetSummary } from "./xssmatchsetsummary";


// ListXssMatchSetsResponse
/** 
 * The response to a <a>ListXssMatchSets</a> request.
**/
export class ListXssMatchSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=XssMatchSets", elemType: shared.XssMatchSetSummary })
  xssMatchSets?: XssMatchSetSummary[];
}
