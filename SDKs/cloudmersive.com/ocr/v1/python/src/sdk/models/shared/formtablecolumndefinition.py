from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FormTableColumnDefinition:
    allow_numeric_digits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowNumericDigits' }})
    anchor_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnchorMode' }})
    column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnID' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    minimum_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumCharacterCount' }})
    top_anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopAnchor' }})
    
