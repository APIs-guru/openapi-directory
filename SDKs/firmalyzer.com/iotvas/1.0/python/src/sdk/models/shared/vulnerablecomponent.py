from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VulnerableComponent:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    cvss_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvss_max') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vulnerabilities: Optional[List[Vulnerability]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerabilities') }})
    
