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
class DescribeStudioLifecycleConfigResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    studio_lifecycle_config_app_type: Optional[StudioLifecycleConfigAppTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigAppType') }})
    studio_lifecycle_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigArn') }})
    studio_lifecycle_config_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigContent') }})
    studio_lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioLifecycleConfigName') }})
    
