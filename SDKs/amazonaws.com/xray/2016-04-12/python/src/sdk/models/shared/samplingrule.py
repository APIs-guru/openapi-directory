from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SamplingRule:
    r"""SamplingRule
    A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
    """
    
    fixed_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedRate') }})
    http_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HTTPMethod') }})
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Host') }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    reservoir_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReservoirSize') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    service_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceType') }})
    url_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('URLPath') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleARN') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleName') }})
    
