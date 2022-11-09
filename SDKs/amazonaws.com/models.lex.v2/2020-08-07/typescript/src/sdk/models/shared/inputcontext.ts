import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputContext
/** 
 * The name of a context that must be active for an intent to be selected by Amazon Lex.
**/
export class InputContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
