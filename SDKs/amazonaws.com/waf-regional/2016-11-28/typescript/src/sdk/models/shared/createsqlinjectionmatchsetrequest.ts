import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSqlInjectionMatchSetRequest
/** 
 * A request to create a <a>SqlInjectionMatchSet</a>.
**/
export class CreateSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
