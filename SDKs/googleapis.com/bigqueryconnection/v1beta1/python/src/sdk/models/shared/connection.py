from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudsqlproperties


@dataclass_json
@dataclass
class Connection:
    cloud_sql: Optional[cloudsqlproperties.CloudSQLProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSql' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    has_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasCredential' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
