from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FormFieldDefinition:
    allow_numeric_digits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowNumericDigits' }})
    alternate_anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlternateAnchor' }})
    anchor_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnchorMode' }})
    bottom_anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BottomAnchor' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataType' }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldID' }})
    horizontal_alignment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HorizontalAlignmentType' }})
    ignore: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ignore' }})
    left_anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeftAnchor' }})
    minimum_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumCharacterCount' }})
    options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    target_digit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetDigitCount' }})
    target_field_height_relative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetFieldHeight_Relative' }})
    target_field_horizontal_adjustment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetFieldHorizontalAdjustment' }})
    target_field_vertical_adjustment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetFieldVerticalAdjustment' }})
    target_field_width_relative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetFieldWidth_Relative' }})
    top_anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopAnchor' }})
    vertical_alignment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerticalAlignmentType' }})
    
