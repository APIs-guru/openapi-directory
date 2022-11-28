from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""CharacterRules
    Password character rules
    """
    
    must_contain_characters: List[CharacterRulesMustContainCharactersEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mustContainCharacters') }})
    number_of_characteristics_to_enforce: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfCharacteristicsToEnforce') }})
    
