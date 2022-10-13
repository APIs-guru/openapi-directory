from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sorttrialcomponentsby_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListTrialComponentsRequest:
    created_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    experiment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExperimentName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[sorttrialcomponentsby_enum.SortTrialComponentsByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    trial_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrialName' }})
    
