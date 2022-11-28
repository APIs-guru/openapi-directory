from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RealtimeDataColumnHeaders:
    column_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnType') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class RealtimeDataProfileInfo:
    r"""RealtimeDataProfileInfo
    Information for the view (profile), for which the real time data was requested.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileName') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableId') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclass
class RealtimeDataQuery:
    r"""RealtimeDataQuery
    Real time data request query parameters.
    """
    
    dimensions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-results') }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    sort: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    

@dataclass_json
@dataclass
class RealtimeData:
    r"""RealtimeData
    Real time data for a given view (profile).
    """
    
    column_headers: Optional[List[RealtimeDataColumnHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeaders') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile_info: Optional[RealtimeDataProfileInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileInfo') }})
    query: Optional[RealtimeDataQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    rows: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    totals_for_all_results: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalsForAllResults') }})
    
