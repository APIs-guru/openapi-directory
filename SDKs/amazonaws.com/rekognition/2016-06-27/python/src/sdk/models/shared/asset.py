from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import groundtruthmanifest


@dataclass_json
@dataclass
class Asset:
    ground_truth_manifest: Optional[groundtruthmanifest.GroundTruthManifest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroundTruthManifest' }})
    
