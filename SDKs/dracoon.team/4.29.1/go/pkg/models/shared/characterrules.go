package shared

type CharacterRulesMustContainCharactersEnum string

const (
	CharacterRulesMustContainCharactersEnumAlpha     CharacterRulesMustContainCharactersEnum = "alpha"
	CharacterRulesMustContainCharactersEnumUppercase CharacterRulesMustContainCharactersEnum = "uppercase"
	CharacterRulesMustContainCharactersEnumLowercase CharacterRulesMustContainCharactersEnum = "lowercase"
	CharacterRulesMustContainCharactersEnumNumeric   CharacterRulesMustContainCharactersEnum = "numeric"
	CharacterRulesMustContainCharactersEnumSpecial   CharacterRulesMustContainCharactersEnum = "special"
	CharacterRulesMustContainCharactersEnumAll       CharacterRulesMustContainCharactersEnum = "all"
	CharacterRulesMustContainCharactersEnumNone      CharacterRulesMustContainCharactersEnum = "none"
)

type CharacterRules struct {
	MustContainCharacters            []CharacterRulesMustContainCharactersEnum `json:"mustContainCharacters"`
	NumberOfCharacteristicsToEnforce int32                                     `json:"numberOfCharacteristicsToEnforce"`
}
