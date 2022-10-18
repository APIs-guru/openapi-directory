from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphapropertysummary


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccountSummary:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    property_summaries: Optional[List[googleanalyticsadminv1alphapropertysummary.GoogleAnalyticsAdminV1alphaPropertySummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertySummaries' }})
    
