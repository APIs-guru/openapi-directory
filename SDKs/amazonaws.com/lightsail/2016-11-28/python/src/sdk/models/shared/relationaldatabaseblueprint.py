from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabaseengine_enum


@dataclass_json
@dataclass
class RelationalDatabaseBlueprint:
    blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueprintId' }})
    engine: Optional[relationaldatabaseengine_enum.RelationalDatabaseEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    engine_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineDescription' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineVersion' }})
    engine_version_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineVersionDescription' }})
    is_engine_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEngineDefault' }})
    
