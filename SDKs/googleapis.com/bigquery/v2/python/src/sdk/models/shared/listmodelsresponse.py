from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import model


@dataclass_json
@dataclass
class ListModelsResponse:
    models: Optional[List[model.Model]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
