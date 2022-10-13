from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assetlicensename_enum


@dataclass_json
@dataclass
class AssetLicensingResponse:
    acquired_licenses: Optional[List[assetlicensename_enum.AssetLicenseNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcquiredLicenses' }})
    credits_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditsUsed' }})
    
