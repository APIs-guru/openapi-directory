from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DisassociateResolverEndpointIPAddressRequest:
    ip_address: IPAddressUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    resolver_endpoint_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    
