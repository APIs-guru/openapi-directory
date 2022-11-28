from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConfigurationSetResponse:
    r"""GetConfigurationSetResponse
    Information about a configuration set.
    """
    
    configuration_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    delivery_options: Optional[DeliveryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryOptions') }})
    reputation_options: Optional[ReputationOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReputationOptions') }})
    sending_options: Optional[SendingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingOptions') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tracking_options: Optional[TrackingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingOptions') }})
    
