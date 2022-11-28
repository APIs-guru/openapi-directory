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
class ModelPackageSummary:
    r"""ModelPackageSummary
    Provides summary information about a model package.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_package_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageArn') }})
    model_package_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageName') }})
    model_package_status: ModelPackageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageStatus') }})
    model_approval_status: Optional[ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelApprovalStatus') }})
    model_package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageDescription') }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupName') }})
    model_package_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageVersion') }})
    
