from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainSummary:
    r"""DomainSummary
    Summary information about one domain.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transfer_lock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferLock') }})
    
