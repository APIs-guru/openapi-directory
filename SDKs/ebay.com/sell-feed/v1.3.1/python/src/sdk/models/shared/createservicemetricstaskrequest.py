from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServiceMetricsTaskRequest:
    r"""CreateServiceMetricsTaskRequest
    The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
    """
    
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    filter_criteria: Optional[CustomerServiceMetricsFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
