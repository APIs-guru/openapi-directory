from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import searchedversion


@dataclass_json
@dataclass
class VersionSearchResults:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    versions: List[searchedversion.SearchedVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
