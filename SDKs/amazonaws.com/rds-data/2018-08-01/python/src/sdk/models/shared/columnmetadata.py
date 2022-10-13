from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ColumnMetadata:
    array_base_column_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayBaseColumnType' }})
    is_auto_increment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAutoIncrement' }})
    is_case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCaseSensitive' }})
    is_currency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCurrency' }})
    is_signed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSigned' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nullable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullable' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaName' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeName' }})
    
