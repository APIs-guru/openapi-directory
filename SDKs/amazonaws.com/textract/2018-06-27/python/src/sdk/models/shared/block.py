from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import blocktype_enum
from . import entitytype_enum
from . import geometry
from . import relationship
from . import selectionstatus_enum
from . import texttype_enum


@dataclass_json
@dataclass
class Block:
    block_type: Optional[blocktype_enum.BlockTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockType' }})
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnIndex' }})
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnSpan' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    entity_types: Optional[List[entitytype_enum.EntityTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityTypes' }})
    geometry: Optional[geometry.Geometry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Page' }})
    relationships: Optional[List[relationship.Relationship]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Relationships' }})
    row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RowIndex' }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RowSpan' }})
    selection_status: Optional[selectionstatus_enum.SelectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectionStatus' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    text_type: Optional[texttype_enum.TextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextType' }})
    
