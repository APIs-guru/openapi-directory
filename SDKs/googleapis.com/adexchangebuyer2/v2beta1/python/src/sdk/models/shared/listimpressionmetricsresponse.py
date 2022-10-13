from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import impressionmetricsrow


@dataclass_json
@dataclass
class ListImpressionMetricsResponse:
    impression_metrics_rows: Optional[List[impressionmetricsrow.ImpressionMetricsRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionMetricsRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
