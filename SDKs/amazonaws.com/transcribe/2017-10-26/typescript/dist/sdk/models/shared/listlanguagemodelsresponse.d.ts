import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageModel } from "./languagemodel";
export declare class ListLanguageModelsResponse extends SpeakeasyBase {
    models?: LanguageModel[];
    nextToken?: string;
}
