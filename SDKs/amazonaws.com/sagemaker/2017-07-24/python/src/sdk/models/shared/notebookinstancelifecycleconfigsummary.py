from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotebookInstanceLifecycleConfigSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notebook_instance_lifecycle_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigArn' }})
    notebook_instance_lifecycle_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigName' }})
    
