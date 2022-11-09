import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuiltinIntentSlot
/** 
 * Provides information about a slot used in a built-in intent.
**/
export class BuiltinIntentSlot extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
