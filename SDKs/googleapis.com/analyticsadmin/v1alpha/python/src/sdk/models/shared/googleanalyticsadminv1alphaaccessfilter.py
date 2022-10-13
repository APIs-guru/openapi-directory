from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessbetweenfilter
from . import googleanalyticsadminv1alphaaccessinlistfilter
from . import googleanalyticsadminv1alphaaccessnumericfilter
from . import googleanalyticsadminv1alphaaccessstringfilter


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessFilter:
    between_filter: Optional[googleanalyticsadminv1alphaaccessbetweenfilter.GoogleAnalyticsAdminV1alphaAccessBetweenFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betweenFilter' }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    in_list_filter: Optional[googleanalyticsadminv1alphaaccessinlistfilter.GoogleAnalyticsAdminV1alphaAccessInListFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inListFilter' }})
    numeric_filter: Optional[googleanalyticsadminv1alphaaccessnumericfilter.GoogleAnalyticsAdminV1alphaAccessNumericFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericFilter' }})
    string_filter: Optional[googleanalyticsadminv1alphaaccessstringfilter.GoogleAnalyticsAdminV1alphaAccessStringFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringFilter' }})
    
