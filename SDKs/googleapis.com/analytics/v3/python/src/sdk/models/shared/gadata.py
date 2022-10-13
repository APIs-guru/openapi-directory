from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GaDataColumnHeaders:
    column_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnType' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GaDataDataTableCols:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GaDataDataTableRowsC:
    v: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v' }})
    

@dataclass_json
@dataclass
class GaDataDataTableRows:
    c: Optional[List[GaDataDataTableRowsC]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'c' }})
    

@dataclass_json
@dataclass
class GaDataDataTable:
    cols: Optional[List[GaDataDataTableCols]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cols' }})
    rows: Optional[List[GaDataDataTableRows]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    

@dataclass_json
@dataclass
class GaDataProfileInfo:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalWebPropertyId' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileId' }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileName' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    

@dataclass_json
@dataclass
class GaDataQuery:
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
class GaData:
    column_headers: Optional[List[GaDataColumnHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnHeaders' }})
    contains_sampled_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsSampledData' }})
    data_last_refreshed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLastRefreshed' }})
    data_table: Optional[GaDataDataTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataTable' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextLink' }})
    previous_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousLink' }})
    profile_info: Optional[GaDataProfileInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileInfo' }})
    query: Optional[GaDataQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    rows: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    sample_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleSize' }})
    sample_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleSpace' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    totals_for_all_results: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalsForAllResults' }})
    
