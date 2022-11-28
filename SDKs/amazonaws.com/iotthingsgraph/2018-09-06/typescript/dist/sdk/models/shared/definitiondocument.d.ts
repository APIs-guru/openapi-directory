import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionLanguageEnum } from "./definitionlanguageenum";
/**
 * A document that defines an entity.
**/
export declare class DefinitionDocument extends SpeakeasyBase {
    language: DefinitionLanguageEnum;
    text: string;
}
