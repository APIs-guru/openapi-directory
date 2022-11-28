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
class NotebookInstanceSummary:
    r"""NotebookInstanceSummary
    Provides summary information for an Amazon SageMaker notebook instance.
    """
    
    notebook_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceArn') }})
    notebook_instance_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceName') }})
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalCodeRepositories') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCodeRepository') }})
    instance_type: Optional[InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notebook_instance_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceLifecycleConfigName') }})
    notebook_instance_status: Optional[NotebookInstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceStatus') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    
