from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstancelifecycleconfigsortkey_enum
from . import notebookinstancelifecycleconfigsortorder_enum


@dataclass_json
@dataclass
class ListNotebookInstanceLifecycleConfigsInput:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameContains' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[notebookinstancelifecycleconfigsortkey_enum.NotebookInstanceLifecycleConfigSortKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[notebookinstancelifecycleconfigsortorder_enum.NotebookInstanceLifecycleConfigSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
