from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSet:
    r"""GoogleAnalyticsAdminV1alphaExpandedDataSet
    A resource message representing a GA4 ExpandedDataSet.
    """
    
    data_collection_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCollectionStartTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimension_filter_expression: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterExpression') }})
    dimension_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionNames') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNames') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
