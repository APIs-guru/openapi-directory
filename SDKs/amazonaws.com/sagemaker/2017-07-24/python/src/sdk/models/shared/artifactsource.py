from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifactsourcetype


@dataclass_json
@dataclass
class ArtifactSource:
    source_types: Optional[List[artifactsourcetype.ArtifactSourceType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTypes' }})
    source_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUri' }})
    
