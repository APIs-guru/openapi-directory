from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrialComponentSource:
    source_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
