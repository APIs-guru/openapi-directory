from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ratekey_enum
from . import tag


@dataclass_json
@dataclass
class CreateRateBasedRuleRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rate_key: ratekey_enum.RateKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateKey' }})
    rate_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateLimit' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
