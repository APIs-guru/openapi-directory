from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesslevelfilter
from . import listrecordhistorysearchfilter


@dataclass_json
@dataclass
class ListRecordHistoryInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    access_level_filter: Optional[accesslevelfilter.AccessLevelFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLevelFilter' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    search_filter: Optional[listrecordhistorysearchfilter.ListRecordHistorySearchFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchFilter' }})
    
