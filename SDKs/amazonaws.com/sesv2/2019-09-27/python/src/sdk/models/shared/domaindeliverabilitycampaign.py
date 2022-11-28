from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainDeliverabilityCampaign:
    r"""DomainDeliverabilityCampaign
    An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
    """
    
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignId') }})
    delete_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteRate') }})
    esps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Esps') }})
    first_seen_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstSeenDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromAddress') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUrl') }})
    inbox_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboxCount') }})
    last_seen_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSeenDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    projected_volume: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectedVolume') }})
    read_delete_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadDeleteRate') }})
    read_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRate') }})
    sending_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingIps') }})
    spam_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpamCount') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    
