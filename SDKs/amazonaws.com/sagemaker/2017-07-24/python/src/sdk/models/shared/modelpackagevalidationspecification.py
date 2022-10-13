from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import modelpackagevalidationprofile


@dataclass_json
@dataclass
class ModelPackageValidationSpecification:
    validation_profiles: List[modelpackagevalidationprofile.ModelPackageValidationProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationProfiles' }})
    validation_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationRole' }})
    
