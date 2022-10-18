from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaexpandeddatasetfilterinlistfilter
from . import googleanalyticsadminv1alphaexpandeddatasetfilterstringfilter


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilter:
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    in_list_filter: Optional[googleanalyticsadminv1alphaexpandeddatasetfilterinlistfilter.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inListFilter' }})
    string_filter: Optional[googleanalyticsadminv1alphaexpandeddatasetfilterstringfilter.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringFilter' }})
    
