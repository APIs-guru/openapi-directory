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
class PublicDNSNamespaceChange:
    r"""PublicDNSNamespaceChange
    Updated properties for the public DNS namespace.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    properties: Optional[PublicDNSNamespacePropertiesChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    
