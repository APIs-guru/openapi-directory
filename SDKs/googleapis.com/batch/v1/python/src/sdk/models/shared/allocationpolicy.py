from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocationPolicy:
    r"""AllocationPolicy
    A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
    """
    
    instances: Optional[List[InstancePolicyOrTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[LocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    network: Optional[NetworkPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    service_account: Optional[ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    
