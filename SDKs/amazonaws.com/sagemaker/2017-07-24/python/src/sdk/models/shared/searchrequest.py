from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum
from . import searchexpression
from . import searchsortorder_enum


@dataclass_json
@dataclass
class SearchRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    search_expression: Optional[searchexpression.SearchExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchExpression' }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[searchsortorder_enum.SearchSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
