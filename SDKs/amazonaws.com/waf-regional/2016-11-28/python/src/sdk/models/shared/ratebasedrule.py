from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import predicate
from . import ratekey_enum


@dataclass_json
@dataclass
class RateBasedRule:
    match_predicates: List[predicate.Predicate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchPredicates' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rate_key: ratekey_enum.RateKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateKey' }})
    rate_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateLimit' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    
