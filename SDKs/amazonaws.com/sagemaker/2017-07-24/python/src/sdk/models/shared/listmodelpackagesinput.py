from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import modelapprovalstatus_enum
from . import modelpackagetype_enum
from . import modelpackagesortby_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListModelPackagesInput:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    model_approval_status: Optional[modelapprovalstatus_enum.ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelApprovalStatus' }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    model_package_type: Optional[modelpackagetype_enum.ModelPackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageType' }})
    name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameContains' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[modelpackagesortby_enum.ModelPackageSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
