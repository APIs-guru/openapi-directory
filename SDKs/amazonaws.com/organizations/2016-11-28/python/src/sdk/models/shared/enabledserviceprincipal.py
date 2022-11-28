from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnabledServicePrincipal:
    r"""EnabledServicePrincipal
    A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations.
    """
    
    date_enabled: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateEnabled'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServicePrincipal') }})
    
