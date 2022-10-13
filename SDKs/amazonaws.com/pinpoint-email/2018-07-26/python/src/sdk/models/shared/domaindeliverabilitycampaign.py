from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainDeliverabilityCampaign:
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignId' }})
    delete_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteRate' }})
    esps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Esps' }})
    first_seen_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstSeenDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromAddress' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUrl' }})
    inbox_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboxCount' }})
    last_seen_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSeenDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    projected_volume: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectedVolume' }})
    read_delete_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadDeleteRate' }})
    read_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRate' }})
    sending_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingIps' }})
    spam_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpamCount' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
