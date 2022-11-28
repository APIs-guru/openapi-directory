from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainMapping:
    r"""DomainMapping
    A domain serving an App Engine application.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_records: Optional[List[ResourceRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRecords') }})
    ssl_settings: Optional[SslSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslSettings') }})
    
