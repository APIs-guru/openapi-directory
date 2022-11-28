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
class DescribeModelPackageGroupOutput:
    created_by: UserContext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_package_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupArn') }})
    model_package_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupName') }})
    model_package_group_status: ModelPackageGroupStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupStatus') }})
    model_package_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupDescription') }})
    
