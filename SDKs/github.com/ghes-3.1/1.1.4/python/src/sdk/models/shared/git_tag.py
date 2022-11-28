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
class GitTagObject:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GitTagTagger:
    date_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GitTag:
    r"""GitTag
    Metadata for a Git tag
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    object: GitTagObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    tagger: GitTagTagger = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagger') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[Verification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
