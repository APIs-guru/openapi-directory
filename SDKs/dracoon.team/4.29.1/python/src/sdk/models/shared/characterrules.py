from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class CharacterRulesMustContainCharactersEnum(str, Enum):
    ALPHA = "alpha"
    UPPERCASE = "uppercase"
    LOWERCASE = "lowercase"
    NUMERIC = "numeric"
    SPECIAL = "special"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclass
class CharacterRules:
    must_contain_characters: List[CharacterRulesMustContainCharactersEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mustContainCharacters' }})
    number_of_characteristics_to_enforce: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfCharacteristicsToEnforce' }})
    
