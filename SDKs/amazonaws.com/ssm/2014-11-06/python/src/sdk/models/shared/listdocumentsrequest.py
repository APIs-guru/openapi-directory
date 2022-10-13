from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentfilter
from . import documentkeyvaluesfilter


@dataclass_json
@dataclass
class ListDocumentsRequest:
    document_filter_list: Optional[List[documentfilter.DocumentFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFilterList' }})
    filters: Optional[List[documentkeyvaluesfilter.DocumentKeyValuesFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
