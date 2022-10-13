from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import listedgepackagingjobssortby_enum
from . import sortorder_enum
from . import edgepackagingjobstatus_enum


@dataclass_json
@dataclass
class ListEdgePackagingJobsRequest:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    model_name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelNameContains' }})
    name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameContains' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[listedgepackagingjobssortby_enum.ListEdgePackagingJobsSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    status_equals: Optional[edgepackagingjobstatus_enum.EdgePackagingJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusEquals' }})
    
