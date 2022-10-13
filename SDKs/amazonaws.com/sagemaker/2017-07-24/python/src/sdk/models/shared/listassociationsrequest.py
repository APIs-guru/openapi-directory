from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import associationedgetype_enum
from . import sortassociationsby_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class ListAssociationsRequest:
    association_type: Optional[associationedgetype_enum.AssociationEdgeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationType' }})
    created_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    destination_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort_by: Optional[sortassociationsby_enum.SortAssociationsByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
