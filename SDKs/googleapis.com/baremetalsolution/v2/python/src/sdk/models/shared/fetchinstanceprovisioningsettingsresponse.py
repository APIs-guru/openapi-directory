from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import osimage


@dataclass_json
@dataclass
class FetchInstanceProvisioningSettingsResponse:
    images: Optional[List[osimage.OsImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    
