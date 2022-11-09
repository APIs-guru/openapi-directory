import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateSqlInjectionMatchSetRequest
/** 
 * A request to create a <a>SqlInjectionMatchSet</a>.
**/
export class CreateSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
