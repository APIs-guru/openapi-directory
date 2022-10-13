from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import algorithmvalidationprofile


@dataclass_json
@dataclass
class AlgorithmValidationSpecification:
    validation_profiles: List[algorithmvalidationprofile.AlgorithmValidationProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationProfiles' }})
    validation_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationRole' }})
    
