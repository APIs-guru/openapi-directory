from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import searchresult


@dataclass_json
@dataclass
class PackageSearchResult:
    package: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    results: List[searchresult.SearchResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
