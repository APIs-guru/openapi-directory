from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProxyInfo:
    r"""ProxyInfo
    Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
    """
    
    excluded_hosts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedHosts') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    pac_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacUri') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
