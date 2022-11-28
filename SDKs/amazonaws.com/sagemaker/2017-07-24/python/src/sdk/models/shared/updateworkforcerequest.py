from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateWorkforceRequest:
    workforce_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkforceName') }})
    oidc_config: Optional[OidcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OidcConfig') }})
    source_ip_config: Optional[SourceIPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpConfig') }})
    
