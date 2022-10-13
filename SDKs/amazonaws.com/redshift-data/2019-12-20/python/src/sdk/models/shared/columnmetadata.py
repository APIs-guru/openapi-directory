from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ColumnMetadata:
    column_default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnDefault' }})
    is_case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCaseSensitive' }})
    is_currency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCurrency' }})
    is_signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSigned' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nullable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullable' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaName' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeName' }})
    
