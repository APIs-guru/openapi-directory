from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstancelifecyclehook
from . import notebookinstancelifecyclehook


@dataclass_json
@dataclass
class DescribeNotebookInstanceLifecycleConfigOutput:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notebook_instance_lifecycle_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigArn' }})
    notebook_instance_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigName' }})
    on_create: Optional[List[notebookinstancelifecyclehook.NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnCreate' }})
    on_start: Optional[List[notebookinstancelifecyclehook.NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnStart' }})
    
