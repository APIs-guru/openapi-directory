from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaConversionEvent:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    custom: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    deletable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletable' }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
