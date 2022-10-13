from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import vocabularystate_enum


@dataclass_json
@dataclass
class ListVocabulariesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameContains' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    state_equals: Optional[vocabularystate_enum.VocabularyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateEquals' }})
    
