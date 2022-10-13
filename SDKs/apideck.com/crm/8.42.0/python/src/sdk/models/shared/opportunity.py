from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class Opportunity:
    close_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_id' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    custom_fields: Optional[List[shared.CustomField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    date_last_contacted: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_last_contacted', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_lead_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_lead_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_stage_changed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_stage_changed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expected_revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_revenue' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interaction_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interaction_count' }})
    last_activity_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_activity_at' }})
    lead_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lead_id' }})
    lead_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lead_source' }})
    loss_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loss_reason' }})
    loss_reason_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loss_reason_id' }})
    monetary_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monetary_amount' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    pipeline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline_id' }})
    pipeline_stage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline_stage_id' }})
    primary_contact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_contact_id' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    stage_last_changed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage_last_changed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_id' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    win_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'win_probability' }})
    won_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won_reason' }})
    won_reason_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'won_reason_id' }})
    
