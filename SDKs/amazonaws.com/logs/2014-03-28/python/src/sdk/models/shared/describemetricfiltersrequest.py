from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeMetricFiltersRequest:
    filter_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterNamePrefix' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    metric_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricNamespace' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
