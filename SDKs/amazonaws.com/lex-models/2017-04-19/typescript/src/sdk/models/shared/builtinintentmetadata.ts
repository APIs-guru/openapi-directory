import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocaleEnum } from "./localeenum";


// BuiltinIntentMetadata
/** 
 * Provides metadata for a built-in intent.
**/
export class BuiltinIntentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=supportedLocales" })
  supportedLocales?: LocaleEnum[];
}
