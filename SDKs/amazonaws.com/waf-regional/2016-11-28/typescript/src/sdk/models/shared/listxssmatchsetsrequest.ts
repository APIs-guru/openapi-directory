import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListXssMatchSetsRequest
/** 
 * A request to list the <a>XssMatchSet</a> objects created by the current AWS account.
**/
export class ListXssMatchSetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
