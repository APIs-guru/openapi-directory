from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemafieldspec


@dataclass_json
@dataclass
class Schema:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    fields: Optional[List[schemafieldspec.SchemaFieldSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    schema_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaId' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaName' }})
    
