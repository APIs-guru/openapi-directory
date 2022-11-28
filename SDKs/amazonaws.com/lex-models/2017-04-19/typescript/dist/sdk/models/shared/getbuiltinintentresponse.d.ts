import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltinIntentSlot } from "./builtinintentslot";
import { LocaleEnum } from "./localeenum";
export declare class GetBuiltinIntentResponse extends SpeakeasyBase {
    signature?: string;
    slots?: BuiltinIntentSlot[];
    supportedLocales?: LocaleEnum[];
}
