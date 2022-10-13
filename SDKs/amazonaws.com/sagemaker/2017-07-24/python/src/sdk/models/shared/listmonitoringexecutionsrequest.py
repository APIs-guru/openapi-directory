from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import monitoringtype_enum
from . import monitoringexecutionsortkey_enum
from . import sortorder_enum
from . import executionstatus_enum


@dataclass_json
@dataclass
class ListMonitoringExecutionsRequest:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    last_modified_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    monitoring_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringJobDefinitionName' }})
    monitoring_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleName' }})
    monitoring_type_equals: Optional[monitoringtype_enum.MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringTypeEquals' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scheduled_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sort_by: Optional[monitoringexecutionsortkey_enum.MonitoringExecutionSortKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    status_equals: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusEquals' }})
    
