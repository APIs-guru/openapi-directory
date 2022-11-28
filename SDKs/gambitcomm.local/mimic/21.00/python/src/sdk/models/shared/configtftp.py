from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigTftp:
    cache: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    dstfile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstfile') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    srcfile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcfile') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trace') }})
    
