import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputContext
/** 
 * The name of a context that must be active for an intent to be selected by Amazon Lex.
**/
export class InputContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
