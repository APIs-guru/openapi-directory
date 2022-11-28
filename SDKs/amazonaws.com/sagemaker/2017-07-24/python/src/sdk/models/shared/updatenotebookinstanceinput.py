from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateNotebookInstanceInput:
    notebook_instance_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceName') }})
    accelerator_types: Optional[List[NotebookInstanceAcceleratorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorTypes') }})
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalCodeRepositories') }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCodeRepository') }})
    disassociate_accelerator_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateAcceleratorTypes') }})
    disassociate_additional_code_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateAdditionalCodeRepositories') }})
    disassociate_default_code_repository: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateDefaultCodeRepository') }})
    disassociate_lifecycle_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisassociateLifecycleConfig') }})
    instance_type: Optional[InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleConfigName') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    root_access: Optional[RootAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootAccess') }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSizeInGB') }})
    
