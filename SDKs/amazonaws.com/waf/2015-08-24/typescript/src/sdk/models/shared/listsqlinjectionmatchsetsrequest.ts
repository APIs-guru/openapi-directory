import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListSqlInjectionMatchSetsRequest
/** 
 * A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
**/
export class ListSqlInjectionMatchSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
