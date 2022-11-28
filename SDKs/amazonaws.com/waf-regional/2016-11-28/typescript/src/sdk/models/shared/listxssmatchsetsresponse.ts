import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { XssMatchSetSummary } from "./xssmatchsetsummary";



// ListXssMatchSetsResponse
/** 
 * The response to a <a>ListXssMatchSets</a> request.
**/
export class ListXssMatchSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=XssMatchSets", elemType: XssMatchSetSummary })
  xssMatchSets?: XssMatchSetSummary[];
}
