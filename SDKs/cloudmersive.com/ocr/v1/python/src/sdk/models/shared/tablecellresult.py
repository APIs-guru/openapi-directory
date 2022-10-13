from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrphototextelement


@dataclass_json
@dataclass
class TableCellResult:
    cell_values: Optional[List[ocrphototextelement.OcrPhotoTextElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CellValues' }})
    column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnID' }})
    
