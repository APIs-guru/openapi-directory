from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standardsprofile


@dataclass_json
@dataclass
class FindSellerStandardsProfilesResponse:
    standards_profiles: Optional[List[standardsprofile.StandardsProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardsProfiles' }})
    
