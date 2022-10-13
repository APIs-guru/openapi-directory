from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import runtime_enum


@dataclass_json
@dataclass
class LayerVersionsListItem:
    compatible_runtimes: Optional[List[runtime_enum.RuntimeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompatibleRuntimes' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    layer_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerVersionArn' }})
    license_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseInfo' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
