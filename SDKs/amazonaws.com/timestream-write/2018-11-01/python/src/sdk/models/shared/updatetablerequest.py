from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import retentionproperties


@dataclass_json
@dataclass
class UpdateTableRequest:
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    retention_properties: retentionproperties.RetentionProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionProperties' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
