from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaxCreateAPIModel:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Percentage' }, 'form': { 'field_name': 'Percentage' }})
    
