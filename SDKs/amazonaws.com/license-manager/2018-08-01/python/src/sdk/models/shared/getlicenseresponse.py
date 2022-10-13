from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import license


@dataclass_json
@dataclass
class GetLicenseResponse:
    license: Optional[license.License] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'License' }})
    
