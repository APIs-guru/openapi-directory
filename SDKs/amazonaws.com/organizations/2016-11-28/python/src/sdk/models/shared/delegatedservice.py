from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DelegatedService:
    r"""DelegatedService
    Contains information about the AWS service for which the account is a delegated administrator.
    """
    
    delegation_enabled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DelegationEnabledDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServicePrincipal') }})
    
