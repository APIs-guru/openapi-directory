import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";



// BuiltinIntentMetadata
/** 
 * Provides metadata for a built-in intent.
**/
export class BuiltinIntentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedLocales" })
  supportedLocales?: LocaleEnum[];
}
