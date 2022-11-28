from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperSubscriptionInput:
    r"""GoogleCloudApigeeV1DeveloperSubscriptionInput
    Structure of a DeveloperSubscription.
    """
    
    apiproduct: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiproduct') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperSubscription:
    r"""GoogleCloudApigeeV1DeveloperSubscription
    Structure of a DeveloperSubscription.
    """
    
    apiproduct: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiproduct') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
