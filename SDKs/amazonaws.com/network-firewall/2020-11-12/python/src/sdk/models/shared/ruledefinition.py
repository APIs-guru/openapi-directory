from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import matchattributes


@dataclass_json
@dataclass
class RuleDefinition:
    actions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    match_attributes: matchattributes.MatchAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchAttributes' }})
    
