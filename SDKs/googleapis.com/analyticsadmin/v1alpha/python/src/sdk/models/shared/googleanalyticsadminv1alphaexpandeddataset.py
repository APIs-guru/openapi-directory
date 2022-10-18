from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaexpandeddatasetfilterexpression


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSet:
    data_collection_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCollectionStartTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dimension_filter_expression: Optional[googleanalyticsadminv1alphaexpandeddatasetfilterexpression.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilterExpression' }})
    dimension_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionNames' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricNames' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
