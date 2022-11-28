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
class UpdateModelPackageInput:
    model_approval_status: ModelApprovalStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelApprovalStatus') }})
    model_package_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageArn') }})
    approval_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalDescription') }})
    
