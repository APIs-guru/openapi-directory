from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class McfDataColumnHeaders:
    column_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnType') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class McfDataProfileInfo:
    r"""McfDataProfileInfo
    Information for the view (profile), for which the Analytics data was requested.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileName') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableId') }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclass
class McfDataQuery:
    r"""McfDataQuery
    Analytics data request query parameters.
    """
    
    dimensions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end-date') }})
    filters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-results') }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    sampling_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingLevel') }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    sort: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start-date') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start-index') }})
    

@dataclass_json
@dataclass
class McfDataRowsConversionPathValue:
    interaction_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactionType') }})
    node_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeValue') }})
    

@dataclass_json
@dataclass
class McfDataRows:
    r"""McfDataRows
    A union object representing a dimension or metric value. Only one of \"primitiveValue\" or \"conversionPathValue\" attribute will be populated.
    """
    
    conversion_path_value: Optional[List[McfDataRowsConversionPathValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionPathValue') }})
    primitive_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitiveValue') }})
    

@dataclass_json
@dataclass
class McfData:
    r"""McfData
    Multi-Channel Funnels data for a given view (profile).
    """
    
    column_headers: Optional[List[McfDataColumnHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeaders') }})
    contains_sampled_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsSampledData') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextLink') }})
    previous_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousLink') }})
    profile_info: Optional[McfDataProfileInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileInfo') }})
    query: Optional[McfDataQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    rows: Optional[List[List[McfDataRows]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    sample_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleSize') }})
    sample_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleSpace') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    totals_for_all_results: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalsForAllResults') }})
    
