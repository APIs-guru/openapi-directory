import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListXssMatchSetsRequest
/** 
 * A request to list the <a>XssMatchSet</a> objects created by the current AWS account.
**/
export class ListXssMatchSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
