from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List
from dataclasses_json import dataclass_json

class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum(str, Enum):
    DROPLET = "droplet"
    VOLUME = "volume"


@dataclass_json
@dataclass
class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    min_disk_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_disk_size' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    regions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    size_gigabytes: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
