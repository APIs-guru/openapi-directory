import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltinIntentSlot } from "./builtinintentslot";
import { LocaleEnum } from "./localeenum";


export class GetBuiltinIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=slots", elemType: shared.BuiltinIntentSlot })
  slots?: BuiltinIntentSlot[];

  @Metadata({ data: "json, name=supportedLocales" })
  supportedLocales?: LocaleEnum[];
}
