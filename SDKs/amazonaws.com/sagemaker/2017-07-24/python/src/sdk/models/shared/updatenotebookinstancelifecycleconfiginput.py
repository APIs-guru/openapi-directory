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
class UpdateNotebookInstanceLifecycleConfigInput:
    notebook_instance_lifecycle_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceLifecycleConfigName') }})
    on_create: Optional[List[NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnCreate') }})
    on_start: Optional[List[NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnStart') }})
    
