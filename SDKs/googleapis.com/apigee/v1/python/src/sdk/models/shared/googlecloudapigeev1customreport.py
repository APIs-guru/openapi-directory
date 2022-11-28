from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CustomReport:
    chart_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartType') }})
    comments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    from_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromTime') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    last_viewed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastViewedAt') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    metrics: Optional[List[GoogleCloudApigeeV1CustomReportMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    properties: Optional[List[GoogleCloudApigeeV1ReportProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sort_by_cols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortByCols') }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnit') }})
    to_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toTime') }})
    topk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topk') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1CustomReportInput:
    chart_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartType') }})
    comments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    from_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromTime') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    metrics: Optional[List[GoogleCloudApigeeV1CustomReportMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    properties: Optional[List[GoogleCloudApigeeV1ReportProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sort_by_cols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortByCols') }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnit') }})
    to_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toTime') }})
    topk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topk') }})
    
