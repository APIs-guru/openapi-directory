from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BuildInfo:
    build_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_type' }})
    cast_build_revision: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cast_build_revision' }})
    cast_control_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cast_control_version' }})
    preview_channel_state: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_channel_state' }})
    release_track: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_track' }})
    system_build_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system_build_number' }})
    
