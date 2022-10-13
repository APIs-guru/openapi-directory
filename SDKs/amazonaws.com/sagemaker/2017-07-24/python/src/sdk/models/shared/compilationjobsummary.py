from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compilationjobstatus_enum
from . import targetdevice_enum
from . import targetplatformaccelerator_enum
from . import targetplatformarch_enum
from . import targetplatformos_enum


@dataclass_json
@dataclass
class CompilationJobSummary:
    compilation_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobArn' }})
    compilation_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobName' }})
    compilation_job_status: compilationjobstatus_enum.CompilationJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobStatus' }})
    compilation_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_target_device: Optional[targetdevice_enum.TargetDeviceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationTargetDevice' }})
    compilation_target_platform_accelerator: Optional[targetplatformaccelerator_enum.TargetPlatformAcceleratorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationTargetPlatformAccelerator' }})
    compilation_target_platform_arch: Optional[targetplatformarch_enum.TargetPlatformArchEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationTargetPlatformArch' }})
    compilation_target_platform_os: Optional[targetplatformos_enum.TargetPlatformOsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationTargetPlatformOs' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
