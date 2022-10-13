from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import systeminstancedeploymentstatus_enum
from . import deploymenttarget_enum


@dataclass_json
@dataclass
class SystemInstanceSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    greengrass_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassGroupId' }})
    greengrass_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassGroupName' }})
    greengrass_group_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassGroupVersionId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: Optional[systeminstancedeploymentstatus_enum.SystemInstanceDeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: Optional[deploymenttarget_enum.DeploymentTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
