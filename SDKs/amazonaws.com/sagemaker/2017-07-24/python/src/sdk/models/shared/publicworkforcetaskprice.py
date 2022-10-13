from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usd


@dataclass_json
@dataclass
class PublicWorkforceTaskPrice:
    amount_in_usd: Optional[usd.Usd] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmountInUsd' }})
    
