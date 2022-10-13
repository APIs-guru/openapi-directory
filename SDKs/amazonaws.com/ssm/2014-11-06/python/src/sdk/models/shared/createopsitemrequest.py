from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsitemnotification
from . import opsitemdatavalue
from . import relatedopsitem
from . import tag


@dataclass_json
@dataclass
class CreateOpsItemRequest:
    actual_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    actual_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    notifications: Optional[List[opsitemnotification.OpsItemNotification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    operational_data: Optional[dict[str, opsitemdatavalue.OpsItemDataValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationalData' }})
    ops_item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemType' }})
    planned_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    planned_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    related_ops_items: Optional[List[relatedopsitem.RelatedOpsItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedOpsItems' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
