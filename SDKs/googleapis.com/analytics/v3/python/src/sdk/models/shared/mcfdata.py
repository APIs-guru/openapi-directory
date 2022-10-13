from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class McfDataColumnHeaders:
    column_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnType' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class McfDataProfileInfo:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileName' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    

@dataclass_json
@dataclass
class McfDataQuery:
    dimensions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end-date' }})
    filters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max-results' }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    sampling_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingLevel' }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment' }})
    sort: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start-date' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start-index' }})
    

@dataclass_json
@dataclass
class McfDataRowsConversionPathValue:
    interaction_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactionType' }})
    node_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeValue' }})
    

@dataclass_json
@dataclass
class McfDataRows:
    conversion_path_value: Optional[List[McfDataRowsConversionPathValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionPathValue' }})
    primitive_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primitiveValue' }})
    

@dataclass_json
@dataclass
class McfData:
    column_headers: Optional[List[McfDataColumnHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnHeaders' }})
    contains_sampled_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsSampledData' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLink' }})
    previous_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousLink' }})
    profile_info: Optional[McfDataProfileInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileInfo' }})
    query: Optional[McfDataQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    rows: Optional[List[List[McfDataRows]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    sample_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleSize' }})
    sample_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleSpace' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    totals_for_all_results: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalsForAllResults' }})
    
