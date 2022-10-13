from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportYumArtifactsGcsSource:
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    use_wildcards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useWildcards' }})
    
