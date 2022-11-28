from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProtocolDetails:
    r"""ProtocolDetails
    <p> The protocol settings that are configured for your server. </p> <note> <p> This type is only valid in the <code>UpdateServer</code> API. </p> </note>
    """
    
    passive_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PassiveIp') }})
    
