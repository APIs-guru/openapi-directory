from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedconfiguration


@dataclass_json
@dataclass
class ScheduleTemplateResponse:
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTemplateId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supported_configurations: Optional[List[supportedconfiguration.SupportedConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedConfigurations' }})
    
