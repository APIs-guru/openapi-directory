from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accesslevelfilter
from . import sortorder_enum


@dataclass_json
@dataclass
class SearchProvisionedProductsInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    access_level_filter: Optional[accesslevelfilter.AccessLevelFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLevelFilter' }})
    filters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
