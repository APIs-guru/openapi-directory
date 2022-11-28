import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";



// BuiltinSlotTypeMetadata
/** 
 * Provides information about a built in slot type.
**/
export class BuiltinSlotTypeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedLocales" })
  supportedLocales?: LocaleEnum[];
}
