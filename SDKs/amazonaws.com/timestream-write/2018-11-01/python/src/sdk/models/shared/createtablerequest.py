from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import retentionproperties
from . import tag


@dataclass_json
@dataclass
class CreateTableRequest:
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    retention_properties: Optional[retentionproperties.RetentionProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionProperties' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
