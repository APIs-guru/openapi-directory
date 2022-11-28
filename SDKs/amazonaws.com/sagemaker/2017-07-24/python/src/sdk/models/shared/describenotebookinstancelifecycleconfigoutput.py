from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeNotebookInstanceLifecycleConfigOutput:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notebook_instance_lifecycle_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceLifecycleConfigArn') }})
    notebook_instance_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceLifecycleConfigName') }})
    on_create: Optional[List[NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnCreate') }})
    on_start: Optional[List[NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnStart') }})
    
