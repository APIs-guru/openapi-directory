from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List
from dataclasses_json import dataclass_json

class Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum(str, Enum):
    SNAPSHOT = "snapshot"
    BACKUP = "backup"


@dataclass_json
@dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    min_disk_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_disk_size' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    regions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    size_gigabytes: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    type: Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
