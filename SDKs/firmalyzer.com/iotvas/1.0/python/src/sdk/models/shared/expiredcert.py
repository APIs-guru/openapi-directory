from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpiredCert:
    file_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_hash') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    public_key: Optional[PublicKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    subject_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject_name') }})
    thumb_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_print') }})
    valid_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid_from') }})
    valid_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid_to') }})
    
