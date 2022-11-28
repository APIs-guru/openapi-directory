import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuiltinIntentSlot
/** 
 * Provides information about a slot used in a built-in intent.
**/
export class BuiltinIntentSlot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
