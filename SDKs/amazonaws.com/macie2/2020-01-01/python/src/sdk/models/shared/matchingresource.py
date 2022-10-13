from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import matchingbucket


@dataclass_json
@dataclass
class MatchingResource:
    matching_bucket: Optional[matchingbucket.MatchingBucket] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingBucket' }})
    
