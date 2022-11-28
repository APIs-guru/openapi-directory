from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobConfiguration:
    copy: Optional[JobConfigurationTableCopy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    extract: Optional[JobConfigurationExtract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extract') }})
    job_timeout_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTimeoutMs') }})
    job_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    load: Optional[JobConfigurationLoad] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load') }})
    query: Optional[JobConfigurationQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
