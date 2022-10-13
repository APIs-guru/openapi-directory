from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import opsitemidentity
from . import opsitemidentity


@dataclass_json
@dataclass
class OpsItemRelatedItemSummary:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationType' }})
    created_by: Optional[opsitemidentity.OpsItemIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_by: Optional[opsitemidentity.OpsItemIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceUri' }})
    
