from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompilationJobSummary:
    r"""CompilationJobSummary
    A summary of a model compilation job.
    """
    
    compilation_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobArn') }})
    compilation_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobName') }})
    compilation_job_status: CompilationJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobStatus') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_target_device: Optional[TargetDeviceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationTargetDevice') }})
    compilation_target_platform_accelerator: Optional[TargetPlatformAcceleratorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationTargetPlatformAccelerator') }})
    compilation_target_platform_arch: Optional[TargetPlatformArchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationTargetPlatformArch') }})
    compilation_target_platform_os: Optional[TargetPlatformOsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationTargetPlatformOs') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
