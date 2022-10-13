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
class OpsItem:
    actual_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    actual_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActualStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notifications: Optional[List[opsitemnotification.OpsItemNotification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    operational_data: Optional[dict[str, opsitemdatavalue.OpsItemDataValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationalData' }})
    ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    ops_item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemType' }})
    planned_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    planned_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    related_ops_items: Optional[List[relatedopsitem.RelatedOpsItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedOpsItems' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    status: Optional[opsitemstatus_enum.OpsItemStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
