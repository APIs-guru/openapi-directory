import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltinIntentSlot } from "./builtinintentslot";
import { LocaleEnum } from "./localeenum";



export class GetBuiltinIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=slots", elemType: BuiltinIntentSlot })
  slots?: BuiltinIntentSlot[];

  @SpeakeasyMetadata({ data: "json, name=supportedLocales" })
  supportedLocales?: LocaleEnum[];
}
