from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1querymetric


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Query:
    csv_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvDelimiter' }})
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    envgroup_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envgroupHostname' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    group_by_time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupByTimeUnit' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    metrics: Optional[List[googlecloudapigeev1querymetric.GoogleCloudApigeeV1QueryMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFormat' }})
    report_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDefinitionId' }})
    time_range: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
