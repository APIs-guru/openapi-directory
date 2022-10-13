from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import artifactstate_enum
from . import artifacttype_enum


@dataclass_json
@dataclass
class ArtifactMetaData:
    created_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    created_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    global_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    modified_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedBy' }})
    modified_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    state: artifactstate_enum.ArtifactStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: artifacttype_enum.ArtifactTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
