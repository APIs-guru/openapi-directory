from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import definitionlanguage_enum


@dataclass_json
@dataclass
class DefinitionDocument:
    language: definitionlanguage_enum.DefinitionLanguageEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
