from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import languagemodel


@dataclass_json
@dataclass
class ListLanguageModelsResponse:
    models: Optional[List[languagemodel.LanguageModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Models' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
