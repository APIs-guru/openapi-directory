from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcerecord
from . import sslsettings


@dataclass_json
@dataclass
class DomainMapping:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_records: Optional[List[resourcerecord.ResourceRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRecords' }})
    ssl_settings: Optional[sslsettings.SslSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslSettings' }})
    
