from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import modelpackagegroupstatus_enum
from . import tag


@dataclass_json
@dataclass
class ModelPackageGroup:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_package_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupArn' }})
    model_package_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupDescription' }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    model_package_group_status: Optional[modelpackagegroupstatus_enum.ModelPackageGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupStatus' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
