from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columndescription
from . import savedview


@dataclass_json
@dataclass
class Table:
    columns: Optional[List[columndescription.ColumnDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    saved_views: Optional[List[savedview.SavedView]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savedViews' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
