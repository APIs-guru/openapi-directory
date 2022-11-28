import { SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";
/**
 * Provides metadata for a built-in intent.
**/
export declare class BuiltinIntentMetadata extends SpeakeasyBase {
    signature?: string;
    supportedLocales?: LocaleEnum[];
}
