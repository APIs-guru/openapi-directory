from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sortcontextsby_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListContextsRequest:
    context_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextType' }})
    created_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[sortcontextsby_enum.SortContextsByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUri' }})
    
