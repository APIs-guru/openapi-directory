from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancetype_enum
from . import notebookinstancestatus_enum


@dataclass_json
@dataclass
class NotebookInstanceSummary:
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalCodeRepositories' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultCodeRepository' }})
    instance_type: Optional[instancetype_enum.InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notebook_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceArn' }})
    notebook_instance_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigName' }})
    notebook_instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceName' }})
    notebook_instance_status: Optional[notebookinstancestatus_enum.NotebookInstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceStatus' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
