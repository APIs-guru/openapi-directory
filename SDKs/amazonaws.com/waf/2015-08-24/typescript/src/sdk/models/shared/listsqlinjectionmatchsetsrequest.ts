import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListSqlInjectionMatchSetsRequest
/** 
 * A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
**/
export class ListSqlInjectionMatchSetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
