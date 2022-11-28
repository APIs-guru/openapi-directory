from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NamespaceProperties:
    r"""NamespaceProperties
    A complex type that contains information that's specific to the namespace type.
    """
    
    dns_properties: Optional[DNSProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsProperties') }})
    http_properties: Optional[HTTPProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpProperties') }})
    
