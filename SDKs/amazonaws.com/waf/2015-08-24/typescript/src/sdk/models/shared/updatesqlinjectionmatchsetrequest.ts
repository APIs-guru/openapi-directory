import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSetUpdate } from "./sqlinjectionmatchsetupdate";



// UpdateSqlInjectionMatchSetRequest
/** 
 * A request to update a <a>SqlInjectionMatchSet</a>.
**/
export class UpdateSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=SqlInjectionMatchSetId" })
  sqlInjectionMatchSetId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: SqlInjectionMatchSetUpdate })
  updates: SqlInjectionMatchSetUpdate[];
}
