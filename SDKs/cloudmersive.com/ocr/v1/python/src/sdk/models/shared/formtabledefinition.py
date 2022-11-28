from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FormTableDefinition:
    r"""FormTableDefinition
    Definition of a form table for OCR data extraction from images
    """
    
    column_definitions: Optional[List[FormTableColumnDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnDefinitions') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableID') }})
    target_row_height_relative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetRowHeight_Relative') }})
    target_table_height_relative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTableHeight_Relative') }})
    
