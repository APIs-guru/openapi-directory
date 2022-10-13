from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import featuregroupstatus_enum
from . import offlinestorestatusvalue_enum
from . import featuregroupsortby_enum
from . import featuregroupsortorder_enum


@dataclass_json
@dataclass
class ListFeatureGroupsRequest:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feature_group_status_equals: Optional[featuregroupstatus_enum.FeatureGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupStatusEquals' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    name_contains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameContains' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    offline_store_status_equals: Optional[offlinestorestatusvalue_enum.OfflineStoreStatusValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfflineStoreStatusEquals' }})
    sort_by: Optional[featuregroupsortby_enum.FeatureGroupSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[featuregroupsortorder_enum.FeatureGroupSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
