from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import launchdisposition_enum
from . import licensing
from . import targetinstancetyperightsizingmethod_enum


@dataclass_json
@dataclass
class LaunchConfiguration:
    copy_private_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyPrivateIp' }})
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyTags' }})
    ec2_launch_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2LaunchTemplateID' }})
    launch_disposition: Optional[launchdisposition_enum.LaunchDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchDisposition' }})
    licensing: Optional[licensing.Licensing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensing' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    target_instance_type_right_sizing_method: Optional[targetinstancetyperightsizingmethod_enum.TargetInstanceTypeRightSizingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetInstanceTypeRightSizingMethod' }})
    
