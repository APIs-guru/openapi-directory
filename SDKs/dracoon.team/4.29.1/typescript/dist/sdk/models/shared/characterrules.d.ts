import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CharacterRulesMustContainCharactersEnum {
    Alpha = "alpha",
    Uppercase = "uppercase",
    Lowercase = "lowercase",
    Numeric = "numeric",
    Special = "special",
    All = "all",
    None = "none"
}
/**
 * Password character rules
**/
export declare class CharacterRules extends SpeakeasyBase {
    mustContainCharacters: CharacterRulesMustContainCharactersEnum[];
    numberOfCharacteristicsToEnforce: number;
}
