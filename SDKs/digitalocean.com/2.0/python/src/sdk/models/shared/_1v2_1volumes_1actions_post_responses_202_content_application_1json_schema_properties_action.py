from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion:
    available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    features: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sizes: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    ERRORED = "errored"


@dataclass_json
@dataclass
class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction:
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    region: Optional[Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    region_slug: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region_slug' }})
    resource_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
