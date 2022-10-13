from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum(str, Enum):
    DEVELOPMENT = "Development"
    STAGING = "Staging"
    PRODUCTION = "Production"


@dataclass_json
@dataclass
class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItems:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: Optional[Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_default' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    owner_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_uuid' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
