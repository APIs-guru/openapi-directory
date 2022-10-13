from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import artifactsourceidtype_enum


@dataclass_json
@dataclass
class ArtifactSourceType:
    source_id_type: artifactsourceidtype_enum.ArtifactSourceIDTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIdType' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
