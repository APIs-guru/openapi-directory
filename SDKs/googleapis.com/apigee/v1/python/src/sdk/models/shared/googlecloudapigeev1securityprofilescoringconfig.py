from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfileScoringConfig:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    score_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scorePath' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
