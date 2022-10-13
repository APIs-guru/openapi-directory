from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SchemaFieldSpecNumericIndexingSpec:
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    

@dataclass_json
@dataclass
class SchemaFieldSpec:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    field_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldType' }})
    indexed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexed' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    multi_valued: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiValued' }})
    numeric_indexing_spec: Optional[SchemaFieldSpecNumericIndexingSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericIndexingSpec' }})
    read_access_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readAccessType' }})
    
