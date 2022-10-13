from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamplingRule:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    fixed_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedRate' }})
    http_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HTTPMethod' }})
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Host' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    reservoir_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReservoirSize' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleARN' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleName' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    service_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceType' }})
    url_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URLPath' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
