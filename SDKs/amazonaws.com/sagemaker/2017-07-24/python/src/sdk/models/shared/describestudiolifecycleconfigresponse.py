from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import studiolifecycleconfigapptype_enum


@dataclass_json
@dataclass
class DescribeStudioLifecycleConfigResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    studio_lifecycle_config_app_type: Optional[studiolifecycleconfigapptype_enum.StudioLifecycleConfigAppTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigAppType' }})
    studio_lifecycle_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigArn' }})
    studio_lifecycle_config_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigContent' }})
    studio_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigName' }})
    
