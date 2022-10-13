from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class CreateHomeRegionControlRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    home_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    target: target.Target = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
