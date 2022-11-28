from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleTemplateResponse:
    r"""ScheduleTemplateResponse
    The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
    """
    
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schedule_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTemplateId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supported_configurations: Optional[List[SupportedConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedConfigurations') }})
    
