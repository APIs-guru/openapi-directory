from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import formtablecolumndefinition


@dataclass_json
@dataclass
class FormTableDefinition:
    column_definitions: Optional[List[formtablecolumndefinition.FormTableColumnDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnDefinitions' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableID' }})
    target_row_height_relative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetRowHeight_Relative' }})
    target_table_height_relative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTableHeight_Relative' }})
    
