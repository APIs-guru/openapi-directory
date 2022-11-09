import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CharacterRulesMustContainCharactersEnum {
    Alpha = "alpha"
,    Uppercase = "uppercase"
,    Lowercase = "lowercase"
,    Numeric = "numeric"
,    Special = "special"
,    All = "all"
,    None = "none"
}


// CharacterRules
/** 
 * Password character rules
**/
export class CharacterRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=mustContainCharacters" })
  mustContainCharacters: CharacterRulesMustContainCharactersEnum[];

  @Metadata({ data: "json, name=numberOfCharacteristicsToEnforce" })
  numberOfCharacteristicsToEnforce: number;
}
