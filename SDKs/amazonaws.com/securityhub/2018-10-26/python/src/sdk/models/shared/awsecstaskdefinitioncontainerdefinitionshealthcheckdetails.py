from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails
    The container health check command and associated configuration parameters for the container.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Retries') }})
    start_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPeriod') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    
