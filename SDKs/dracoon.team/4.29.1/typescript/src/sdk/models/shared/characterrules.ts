import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CharacterRulesMustContainCharactersEnum {
    Alpha = "alpha",
    Uppercase = "uppercase",
    Lowercase = "lowercase",
    Numeric = "numeric",
    Special = "special",
    All = "all",
    None = "none"
}


// CharacterRules
/** 
 * Password character rules
**/
export class CharacterRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mustContainCharacters" })
  mustContainCharacters: CharacterRulesMustContainCharactersEnum[];

  @SpeakeasyMetadata({ data: "json, name=numberOfCharacteristicsToEnforce" })
  numberOfCharacteristicsToEnforce: number;
}
