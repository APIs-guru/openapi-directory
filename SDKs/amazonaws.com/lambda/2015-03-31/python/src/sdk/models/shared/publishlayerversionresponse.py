from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import runtime_enum
from . import layerversioncontentoutput


@dataclass_json
@dataclass
class PublishLayerVersionResponse:
    compatible_runtimes: Optional[List[runtime_enum.RuntimeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompatibleRuntimes' }})
    content: Optional[layerversioncontentoutput.LayerVersionContentOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    layer_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerArn' }})
    layer_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerVersionArn' }})
    license_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseInfo' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
