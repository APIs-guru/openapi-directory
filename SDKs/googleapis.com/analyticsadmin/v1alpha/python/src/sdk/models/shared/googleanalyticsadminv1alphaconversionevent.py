from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaConversionEventInput:
    r"""GoogleAnalyticsAdminV1alphaConversionEventInput
    A conversion event in a Google Analytics property.
    """
    
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaConversionEvent:
    r"""GoogleAnalyticsAdminV1alphaConversionEvent
    A conversion event in a Google Analytics property.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    custom: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    deletable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletable') }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
