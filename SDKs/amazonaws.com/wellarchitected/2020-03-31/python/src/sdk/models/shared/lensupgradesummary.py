from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LensUpgradeSummary:
    current_lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentLensVersion' }})
    latest_lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestLensVersion' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    
