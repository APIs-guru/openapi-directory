import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlInjectionMatchSetUpdate } from "./sqlinjectionmatchsetupdate";


// UpdateSqlInjectionMatchSetRequest
/** 
 * A request to update a <a>SqlInjectionMatchSet</a>.
**/
export class UpdateSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=SqlInjectionMatchSetId" })
  sqlInjectionMatchSetId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.SqlInjectionMatchSetUpdate })
  updates: SqlInjectionMatchSetUpdate[];
}
