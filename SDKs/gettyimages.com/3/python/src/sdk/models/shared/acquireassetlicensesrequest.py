from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import extendedlicenses_enum


@dataclass_json
@dataclass
class AcquireAssetLicensesRequest:
    license_types: List[extendedlicenses_enum.ExtendedLicensesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseTypes' }})
    use_team_credits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseTeamCredits' }})
    
