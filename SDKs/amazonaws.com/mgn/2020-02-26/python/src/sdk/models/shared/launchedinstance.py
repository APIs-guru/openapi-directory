from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import firstboot_enum


@dataclass_json
@dataclass
class LaunchedInstance:
    ec2_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceID' }})
    first_boot: Optional[firstboot_enum.FirstBootEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstBoot' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobID' }})
    
