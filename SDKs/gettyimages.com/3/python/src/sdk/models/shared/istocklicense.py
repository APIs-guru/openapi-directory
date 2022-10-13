from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assetlicensename_enum


@dataclass_json
@dataclass
class IStockLicense:
    credits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits' }})
    license_type: Optional[assetlicensename_enum.AssetLicenseNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_type' }})
    
