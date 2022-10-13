from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TablesModelColumnInfo:
    column_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnDisplayName' }})
    column_spec_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpecName' }})
    feature_importance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureImportance' }})
    
