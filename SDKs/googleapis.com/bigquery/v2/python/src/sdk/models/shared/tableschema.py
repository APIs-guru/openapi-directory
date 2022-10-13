from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablefieldschema


@dataclass_json
@dataclass
class TableSchema:
    fields: Optional[List[tablefieldschema.TableFieldSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
