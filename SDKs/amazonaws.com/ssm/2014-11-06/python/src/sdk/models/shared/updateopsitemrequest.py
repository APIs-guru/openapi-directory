from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import opsitemnotification
from . import opsitemdatavalue
from . import relatedopsitem
from . import opsitemstatus_enum


@dataclass_json
@dataclass
class UpdateOpsItemRequest:
    actual_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    actual_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    notifications: Optional[List[opsitemnotification.OpsItemNotification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    operational_data: Optional[dict[str, opsitemdatavalue.OpsItemDataValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationalData' }})
    operational_data_to_delete: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationalDataToDelete' }})
    ops_item_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    planned_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    planned_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    related_ops_items: Optional[List[relatedopsitem.RelatedOpsItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedOpsItems' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    status: Optional[opsitemstatus_enum.OpsItemStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
