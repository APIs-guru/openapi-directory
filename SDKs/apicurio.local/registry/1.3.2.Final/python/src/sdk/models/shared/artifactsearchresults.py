from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import searchedartifact


@dataclass_json
@dataclass
class ArtifactSearchResults:
    artifacts: List[searchedartifact.SearchedArtifact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    
