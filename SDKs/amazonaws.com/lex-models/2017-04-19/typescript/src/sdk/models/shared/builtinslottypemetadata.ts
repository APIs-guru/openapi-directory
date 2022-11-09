import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocaleEnum } from "./localeenum";


// BuiltinSlotTypeMetadata
/** 
 * Provides information about a built in slot type.
**/
export class BuiltinSlotTypeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=supportedLocales" })
  supportedLocales?: LocaleEnum[];
}
