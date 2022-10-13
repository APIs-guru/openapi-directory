from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import artifactstate_enum


@dataclass_json
@dataclass
class UpdateState:
    state: artifactstate_enum.ArtifactStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
